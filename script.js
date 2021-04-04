
// start of download file
document.getElementById("download").onclick = function saveFile(){
    const output = document.getElementById('editor'); //

    let data = output.innerText;

    const textToBlob = new Blob([data],{type : 'text/plain'})

    const sFileName = document.getElementById("title").value;

    let newFileLink = document.createElement("a");
    newFileLink.download = sFileName;

    if (window.webkitURL != null)
        {
        newFileLink.href = window.webkitURL.createObjectURL(textToBlob);
        }
        else
        {
        newFileLink.href = window.URL.createObjectURL(textToBlob);
        newFileLink.style.display = "none";
        document.body.appendChild(newFileLink);
        }

        newFileLink.click();

} 
// end of download file




// start of buttons
// copy
document.getElementById("copy").onclick = function () {
    document.execCommand("copy");
};

// italic
document.getElementById("italic").onclick = function () {
    document.execCommand("italic");
};

// strikethrough
document.getElementById("strikethrough"
).onclick = function () {
    document.execCommand("strikethrough"
    );
};

// underline
document.getElementById("underline").onclick = function () {
    document.execCommand("underline");
};

// align left
document.getElementById("alignLeft").onclick = function () {
    document.execCommand("justifyLeft");
};

// align center
document.getElementById("alignCenter").onclick = function () {
    document.execCommand("justifyCenter");
};

// align right
document.getElementById("alignRight").onclick = function () {
    document.execCommand("justifyRight");
};

// create ordered list
document.getElementById("orderedList").onclick = function () {
    document.execCommand("insertOrderedList");
};

// create unordered list
document.getElementById("unorderedList").onclick = function () {
    document.execCommand("insertUnorderedList");
};
// end of buttons




// start of font selector
document.getElementById("fontFamily").onclick = function () {
    document.execCommand("fontName", false, document.getElementById("fontFamily").value);

};
// end of font selector


// start of sont size selector
document.getElementById("fontSize").onclick = function () {
    document.execCommand("fontSize", false,document.getElementById("fontSize").options[document.getElementById("fontSize").options.selectedIndex].innerText);
    

};
// end of font size selector


// start of save file
document.getElementById("save").onclick = function () {
    localStorage.setItem("title", document.getElementById("title").value);
    localStorage.setItem("content", document.getElementById("editor").innerHTML);
};
// end of save file