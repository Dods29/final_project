var textarea = document.getElementById("textarea");
var iframe = document.getElementById("iframe");

textarea.addEventListener('input', ()=>{
    iframe.contentDocument.body.innerHTML = textarea.value;
});

function button(){
    var textarea = document.getElementById("textarea").value;
    textarea.replace(/\s/g, '');

    if (textarea.includes('<p>hello world</p>')) {
        document.getElementById('show').innerHTML = 'correct';
    } else {
        document.getElementById('show').innerHTML = 'wrong';
    }
}