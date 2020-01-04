

function openForm(){
    document.getElementById('myForm').style.display='block'
}

function closeForm(){
    document.getElementById('myForm').style.display='none'
}


let  messages = document.getElementById('messages');
let textarea = document.getElementById('textarea');
let button = document.getElementById('btn-send');


button.addEventListener('click', function(e){
    e.preventDefault();
    let newMessage = document.createElement('li');
    newMessage.innerHTML = textarea.value;
    
    messages.appendChild(newMessage);
    

    const text = document.getElementById('textarea').value;

    let texts;

    if (localStorage.getItem('texts') === null){
        texts = [];

    }

    else {
        texts = JSON.parse(localStorage.getItem('texts'));
    }

    texts.push(text);
    localStorage.setItem('texts', JSON.stringify(texts));e

    textarea.value = "";
})