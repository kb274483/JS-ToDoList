var addlist = document.querySelector('.checklist');
var enteritems = document.querySelector('.textarea');
var send = document.querySelector('.sendbtn');
var deletebtn = document.querySelector('.checklist');
var listarray = JSON.parse(localStorage.getItem('content')) || [];

update(listarray);

function senddata(e){
    if(enteritems.value == ""){
        alert('You need to type something');
        return;
    }
    listarray.push(enteritems.value);
    localStorage.setItem("content",JSON.stringify(listarray));
    addlist.innerHTML = '';
    enteritems.value = '';
    update(listarray);
}

function update(listarray){
    addlist.innerHTML = '';  
    var len = listarray.length;
    console.log(listarray);
    for(var i = 0; i < len ; i++){
        var lipoint = document.createElement('li');
        var apoint = document.createElement('a');
        lipoint.setAttribute('class','items');
        apoint.setAttribute('data-num',i);
        lipoint.textContent = listarray[i];
        apoint.textContent = "刪除" ;
        addlist.appendChild(lipoint);
        lipoint.appendChild(apoint);             
    }
    
}

function delefun(e) {
    if(e.target.nodeName !== "A"){return}
    var num = e.target.dataset.num;
    console.log("你點到"+num+"號的A連結");
    listarray.splice(num,1);
    localStorage.setItem("content",JSON.stringify(listarray));
    update(listarray);
}

send.addEventListener("click",senddata);
deletebtn.addEventListener("click",delefun);

