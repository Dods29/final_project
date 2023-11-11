var textarea = document.getElementById("textarea");
var iframe = document.getElementById("iframe");

textarea.addEventListener ("input", ()=>{
    iframe.contentDocument.body.innerHTML = textarea.value;
})

function btn(){
    var textarea = document.getElementById("textarea").value;
    textarea.replace(/\s/g, '');

    if (textarea.includes('<header>') && textarea.includes('<title') && textarea.includes('</title') && textarea.includes('</header>') && textarea.includes('<h1>') && textarea.includes('</h1>') && textarea.includes('<p>') && textarea.includes('</p>')){
        document.getElementById("result").innerHTML = "correct";
    } else {
        document.getElementById("result").innerHTML = "incorrect";
    }
}
