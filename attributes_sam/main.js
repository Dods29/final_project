var textarea = document.getElementById("textarea");
var iframe = document.getElementById("iframe");

textarea.addEventListener('input', ()=>{
    iframe.contentDocument.body.innerHTML = textarea.value;
});

function button(){
    var textarea = document.getElementById("textarea").value;
    textarea.replace(/\s/g, '');

    if (textarea.includes('hello') && textarea.includes('world')) {
        document.getElementById('show').innerHTML = 'correct';
    } else {
        document.getElementById('show').innerHTML = 'wrong';
    }
}