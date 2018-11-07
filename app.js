const div = document.createElement( 'div' )
const vid = document.createElement('div')
const hook = document.createElement('div')

div.id = 'sideDiv'

vid.id = 'contentDiv'

hook.id = 'hookDiv'



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
    width: "300px",
    height: "200px",
    backgroundColor: "lightgray",
    zIndex: "1000",
    right: "0",
    top: "calc(50% - 80px)"
}

const chartContainerStyle = {
    width: '200px',
    height: '200px'
}

$(div).css(sideDivStyle)
$(vid).css(ContentDivStyle)

$(div).click(() => {
    if($(vid).is(":visible")){
        $(div).text("<")
        $(vid).css("display", "none")
        $(div).css("right", "0")
    }
    else {
        $(div).text(">")
        $(div).css("right", "300px")
        $(vid).css("display", "flex")    
    }
    
})

const config = {
    apiKey: "AAAA5vjQHxs:APA91bHUflcKyy9kkLxu7Q--trmLWgp8mP6QAvuCpqM5ffEmkVKF6kSRRiKhz4bJENwFL2UvZHCaveWGH7gtHrA_3Gp03ztcOgiSoJeZ4pW06HeJttTbPEuL515_enXK25fSd2QpvTKW",
    authDomain: "992016867099.firebaseapp.com",
    databaseURL: "https://level-maintenance-plugin.firebaseio.com",
    storageBucket: "level-maintenance-plugin.appspot.com",
}

firebase.initializeApp(config);


function createChart(result) {
    console.log(result)
    let chartContainer = document.createElement('div')
    chartContainer.id = 'gauge'
    $(chartContainer).css(chartContainerStyle)
    $(vid).append(chartContainer)

    console.log($('#gauge'))

    const g = new JustGage({
        id: "gauge",
        value: result.lma,
        min: 0,
        max: 100,
        title: "LMA",
        decimals: 1,
        levelColors: ["#ff000c", "#00ff0c"],
    });
}

function handleMessage(request, sender, sendResponse) {
    console.log(request);
    const {full_name} = request;
    const owner = full_name.split('/')[0];
    const name = full_name.split('/')[1];

    firebase.database().ref('/projects').once('value').then((res) => {
            const result = (res.val()[`${owner}`][`${name}`]);
            $(vid).text(`${request.name}`);
            createChart(result)
        }
    )

    $('.repohead h1').after(div)
    $('#sideDiv').text("<")
    $(div).after(vid)
    return true
}

chrome.runtime.onMessage.addListener(handleMessage)

