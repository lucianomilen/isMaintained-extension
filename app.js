const div = document.createElement( 'div' );
const vid = document.createElement('div');

div.id = 'sideDiv';

vid.id = 'contentDiv';

const sideDivStyle = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    backgroundColor: "lightblue",
    zIndex: "1000",
    right: "0",
    top: "50%",
    borderTopLeftRadius: "155px",
    borderBottomLeftRadius: "155px"
}

const ContentDivStyle = {
    position: "fixed",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "lightgray",
    zIndex: "1000",
    right: "0",
    top: "calc(50% - 30px)"
}

$(div).css(sideDivStyle);
$(vid).css(ContentDivStyle);

$(div).click(() => {
    if($(vid).is(":visible")){
        $(div).text("<")
        $(vid).css("display", "none")
        $(div).css("right", "0")
    }
    else {
        $(div).text(">")
        $(div).css("right", "100px")
        $(vid).css("display", "flex")    
    }
    
})

function handleMessage(request, sender, sendResponse) {
    console.log(request);
    $('.repohead h1').after(div)
    $('#sideDiv').text("<")
    $(div).after(vid);
    return true;
}

chrome.runtime.onMessage.addListener(handleMessage);

