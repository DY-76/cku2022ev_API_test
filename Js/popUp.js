var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

function addList(Gp_datas, index, name)  {

  // 1. 추가할 값을 input창에서 읽어온다
  const addValue = name;

  // 2. 추가할 li element 생성
  // 2-1. 추가할 li element 생성
  const li = document.createElement("a");

  // 2-2. li에 id 속성 추가
  li.setAttribute('href',"#mk"+index);
  li.setAttribute('id',"#mk"+index);

  // 2-3. li에 text node 추가
  const textNode = document.createTextNode(addValue);
  li.appendChild(textNode);

  // 3. 생성된 li를 ul에 추가
  document.getElementById('data_list').appendChild(li);
}