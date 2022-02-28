const noBtnWrap=document.getElementsByClassName('no-btn-wrap')[0];
const content=document.getElementsByClassName('content')[0];
const bounds=content.getBoundingClientRect();
const modal=document.getElementsByClassName('modal')[0];
const questionEle=document.getElementById('question');
const urlParams = new URLSearchParams(document.location.search);

let question=urlParams.get("question") || "Are you dumb?"
let response=urlParams.get("answer") || "Yay i knew it."
questionEle.innerText=question;


let position = {
    top: bounds.top + window.pageYOffset,
    left: bounds.left + window.pageXOffset,
    width:bounds.width,
    height:bounds.height
};
function move(){
    let randomX=Math.random()*position.width;
    let randomY=Math.random()*position.height;
    noBtnWrap.style.bottom=`${randomY}px`;
    noBtnWrap.style.right=`${randomX}px`;
}

function yesClicked(){
    modal.innerHTML=`<h1>${response}</h1>`;
}