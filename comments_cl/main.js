var textarea = document.getElementById("textarea");
var iframe = document.getElementById("iframe");

textarea.addEventListener("input", ()=>{
    iframe.conentDocument.body.innerHTML = textarea.value;
});

function btn(){
    var textarea = document.getElementById("textarea").value;
    textarea.replace(/\s/g, '');

    if (textarea.includes('<!--') && textarea.includes('-->')){
        document.getElementById('result').innerHTML = 'correct';
    } else {
        document.getElementById('result').innerHTML = 'incorrect';
    }
}