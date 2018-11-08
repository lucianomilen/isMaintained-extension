const div = document.createElement('div')
const vid = document.createElement('div')
const hook = document.createElement('div')

div.id = 'sideDiv'

vid.id = 'contentDiv'

hook.id = 'hookDiv'

const sideDivStyle = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    backgroundColor: "lightgray",
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
    backgroundColor: "#ddd",
    zIndex: "1000",
    right: "0",
    top: "calc(50% - 80px)",
    boxShadow: "0 0 1px 0px #4c4c4c"
}

const chartContainerStyle = {
    width: '100%',
    height: '100%'
}

$(div).css(sideDivStyle)
$(vid).css(ContentDivStyle)

$(div).click(() => {
    if ($(vid).is(":visible")) {
        $(div).text("←")
        $(vid).css("display", "none")
        $(div).css("right", "0")
    }
    else {
        $(div).text("→")
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

firebase.initializeApp(config)

const gaugeTitleStyle = {
    textAlign: 'center',
    position: 'absolute',
    top: 0
}

function setArrowBackground() {
    if(value < 25) {
        $(div).css("background-color", "#bf3500")
    }
    else if(value < 75) {
        $(div).css("background-color", "#ceff00")
    }
    else {
        $(div).css("background-color", "#00ff00")
    }
}


function createChart(result, repName) {
    console.log(repName)
    let chartContainer = document.createElement('div')
    chartContainer.id = 'gauge'
    $(chartContainer).css(chartContainerStyle)
    const title = document.createElement('p')
    $(title).css(gaugeTitleStyle)
    $(title).text(repName)
    $(vid).append(title)
    $(vid).append(chartContainer)


    const g = new JustGage({
        id: "gauge",
        value: result.lma,
        min: 0,
        max: 100,
        width: 300,
        height: 200,
        label: "Maintenance Activity",
        labelMinFontSize: 14,
        labelFontColor: "#000",
        decimals: 1,

        customSectors: {
            percents: true,
            ranges: [{
                color: "#bf3500",
                lo: 0,
                hi: 24
            }, {
                color: "#ceff00",
                lo: 25,
                hi: 74
            }, {
                color: "#00ff00",
                lo: 75,
                hi: 100
            }]
        }
    })
}

function handleMessage(request, sender, sendResponse) {
    const {full_name} = request
    const owner = full_name.split('/')[0]
    const name = full_name.split('/')[1]

    firebase.database().ref('/projects').once('value').then((res) => {
            const projectOwner = res.val()[`${owner}`]
            if (projectOwner) {
                const result = (projectOwner[`${name}`])
                setArrowBackground(result.lma)
                createChart(result, full_name)
            }
            else console.log("not found")
        }
    )

    $('.repohead h1').after(div)
    $(div).text("←")
    $(div).after(vid)
    return true
}

chrome.runtime.onMessage.addListener(handleMessage)

