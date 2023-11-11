var textarea = document.getElementById("textarea");
var iframe = document.getElementById("iframe");

textarea.addEventListener ("input", ()=>{
    iframe.contentDocument.body.innerHTML = textarea.value;
});

function btn(){
    var textarea = document.getElementById("textarea").value;
    textarea.replace(/\s/g, '');

    if (textarea.includes('<h1>') && textarea.includes('</h1>') && textarea.includes('<h2>') && textarea.includes('</h2>') && textarea.includes('<h3>') && textarea.includes('</h3>') && textarea.includes('<h4>') && textarea.includes('</h4>') && textarea.includes('<h5>') && textarea.includes('</h5>') && textarea.includes('<h6>') && textarea.includes('</h6>')){
        document.getElementById("result").innerHTML = "correct";
    } else {
        document.getElementById("result").innerHTML = "incorrect";
    }
}