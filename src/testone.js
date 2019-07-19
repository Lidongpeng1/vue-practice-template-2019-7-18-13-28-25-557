function increase(id){
    let Lidongpeng = document.getElementById(id);
    Lidongpeng.value++;
}

function decrease(id){
    let Lidongpeng = document.getElementById(id);
    Lidongpeng.value--;
}

function change(){
    let changenumber = document.getElementById('changenumber');
    let div = document.getElementById('addElement');
    div.innerHTML="";
    for(let i = 0; i < changenumber.value; i++){
        div.innerHTML += (`<div>
        <button onclick="increase('${i}')"> + </button>
        <input id="${i}" type="text">
        <button onclick="decrease('${i}')"> - </button>
        </div>`)
        var bo = document.body;
        bo.insertBefore(div,bo.lastChild);
    }
}