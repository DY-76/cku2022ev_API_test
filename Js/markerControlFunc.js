
// 전역 변수
// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markers = [];

// 지도에 표시된 인포 객체를 가지고 있을 배열입니다
var infowindows = [];


// 받은 JSON 데이터를 주소기준 중복을 제거함 - GroupDatas[sameAddrData] 2차원 리스트로 내부 형태 보존
function RequestMarker(Datas){
    sameAddrData = [];
    GroupDatas = [];
    sameAddrData.push(Datas[0]);
    for (var i = 1; i < Datas.length; i++){
        if (Datas[i].addr === Datas[i-1].addr) {
            sameAddrData.push(Datas[i]);
        } else {
            GroupDatas.push(sameAddrData);

            //임시 마커 호출 형식 (차후, 데이터를 리스트 형태로 넘기는 함수 제작 예정)
            Names = [];
            for (var j = 0; j < GroupDatas[GroupDatas.length-1].length; j++){
                Names.push(GroupDatas[GroupDatas.length-1][j].csNm)
            }
            //리스트 추가
            addList(GroupDatas[GroupDatas.length-1][0],j,Names[0])
            //마커추가
            addMarker(new kakao.maps.LatLng(GroupDatas[GroupDatas.length-1][0].lat, GroupDatas[GroupDatas.length-1][0].longi), Names)

            sameAddrData = [];
            sameAddrData.push(Datas[i]);
        }
    }
    // 데이터 디버깅
    console.log(GroupDatas)
}

// 마커를 생성하고 지도위에 표시하는 함수입니다, 인자로 이름을받아 인포에 사용합니다
function addMarker(position, names) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: position
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);

    // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    name = '';
    for (var i = 0; i < names.length; i++) {
        name += names[i] + '<br>'
    }
    var iwContent = '<div style="padding:5px;">' + name + '</div>';
    // 인포윈도우를 생성합니다
    //인포윈도우 표시 위치입니다
    var infowindow = new kakao.maps.InfoWindow({
        position : position,
        content : iwContent
    });

    // 생성된 인포를 마커에 표시합니다
    infowindow.open(map, marker);

    // 생성된 인포를 배열에 추가합니다
    infowindows.push(infowindow);

}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);

        // 마커 위에 인포를 출력합니다.
        infowindows[i].open(map, markers[i]);
    }
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    setMarkers(map)
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    setMarkers(null);
}

