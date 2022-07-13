var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');


function addList(Gp_datas, index, name)  {

  // 1. 추가할 값을 input창에서 읽어온다
  const addValue = name;

  // 2. 추가할 li element 생성
  // 2-1. 추가할 li element 생성
  const li = document.createElement("li");

  // 2-2. li에 id 속성 추가
  li.setAttribute('id',"mk"+index);



  // 3. 생성된 li를 ul에 추가
  document.getElementById('data_list').appendChild(li);

  const a = document.createElement("a");
  a.setAttribute('class',"list_btn");
  a.setAttribute('onclick',"listClick("+index+")");
    // 2-3. a에 text node 추가
  const textNode = document.createTextNode(addValue);
  a.appendChild(textNode);
  document.getElementById("mk"+index).appendChild(a);
}

function popupOn(){
  document.getElementById("pop_map").style.display = 'block';
}
function popupOff(){
  document.getElementById("pop_map").style.display = 'none';
}