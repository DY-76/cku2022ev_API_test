// 불편해서 잠깐 주석처리 (주석 해제하면 바로 사용 가능)
// 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    addMarker(mouseEvent.latLng, ["사용자 지정 위치"]);
});