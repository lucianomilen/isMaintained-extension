// let $ = jQuery;

//set attributes for btnForm

//set attributes for btn
//"btn.removeAttribute( 'style' );

// chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
//     console.error(tabs[0]);
    // document.getElementById("js-repo-pjax-container").innerHTML = JSON.stringify(tabs[0]);
    // var newDiv = document.createElement('div'); // create new textarea
    // newDiv.innerHTML = JSON.stringify(tabs[0]);
    // var thatDiv = document.getElementsByClassName("js-repo-pjax-container")[0];
    //
    // thatDiv.appendChild(newDiv)



// });



var div = document.createElement( 'div' );

div.id = 'myDivId';
div.style.position = 'relative';
div.style.display = "inline-flex"
div.style.width = '28px';
div.style.height = '28px';
div.style.backgroundColor = 'lightblue';

function handleMessage(request, sender, sendResponse) {
    console.log(request);
    $('.repohead h1').after(div)
    $('#myDivId').text(request.greeting)
    return true;
}

chrome.runtime.onMessage.addListener(handleMessage);

