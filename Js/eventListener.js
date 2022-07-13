// 불편해서 잠깐 주석처리 (주석 해제하면 바로 사용 가능)
// 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    addMarker(mouseEvent.latLng, ["사용자 지정 위치"]);
});

var target = document.querySelectorAll('.btn_open .list_btn');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    console.log(targetID.slice(1))
    if (document.getElementById(targetID.slice(1))){
          document.querySelector(targetID).style.display = 'block';
    }
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}

//리스트 클릭 (인덱스값을 받아 마크 삽입함)
// for(var l = 0; l < target.length; l++){
//   target[l].addEventListener('click', function(){
//     targetID = this.getAttribute('href');
//     console.log(targetID);
//     if (document.getElementById(targetID.slice(1))){
//       console.log(targetID.slice(3),Number(targetID.slice(3)))
//       //href값 전처리 후 정수로 형변환하여 전달
//       listClick(Number(targetID.slice(3)));
//     }
//   })
// }