// create element
const div = document.createElement('div')
const vid = document.createElement('div')
const arrowContainerElement = document.createElement('div')
const leftArrowElement = document.createElement('img')
const rightArrowElement = document.createElement('img')

// set img src
rightArrowElement.src = chrome.extension.getURL("images/right-chevron.svg")
leftArrowElement.src = chrome.extension.getURL("images/left-chevron.svg")

// jquery queries
const openButton = $(div)
const contentView = $(vid)
const leftArrow = $(leftArrowElement)
const rightArrow = $(rightArrowElement)
const arrowContainer = $(arrowContainerElement)

// constants
const lowLMAColor = "#ff6a00"
const mediumLMAColor = "#d5ff2f"
const highLMAColor = "#28a745"
const firebaseConfig = {
    apiKey: "AAAA5vjQHxs:APA91bHUflcKyy9kkLxu7Q--trmLWgp8mP6QAvuCpqM5ffEmkVKF6kSRRiKhz4bJENwFL2UvZHCaveWGH7gtHrA_3Gp03ztcOgiSoJeZ4pW06HeJttTbPEuL515_enXK25fSd2QpvTKW",
    authDomain: "992016867099.firebaseapp.com",
    databaseURL: "https://level-maintenance-plugin.firebaseio.com",
    storageBucket: "level-maintenance-plugin.appspot.com",
}

// class adding
rightArrow.addClass("arrowIcon")
leftArrow.addClass("arrowIcon")
openButton.addClass("openButton")
contentView.addClass("contentView")

// firebase init
firebase.initializeApp(firebaseConfig)

// events
openButton.click(() => {

    if (contentView.is(":visible")) {
        arrowContainer.html(leftArrow)
        contentView.css("display", "none")
        openButton.css("right", "0")
    }
    else {
        arrowContainer.html(rightArrow)
        openButton.css("right", "300px")
        contentView.css("display", "flex")
    }

})

// functions
function setArrowBackground(value) {
    if (value < 0) {
        openButton.css("background-color", "#bf3500")
    }
    else if (value < 25) {
        openButton.css("background-color", lowLMAColor)
    }
    else if (value < 75) {
        openButton.css("background-color", mediumLMAColor)
    }
    else {
        openButton.css("background-color", highLMAColor)
    }
}

function setContentTitle() {
    const title = document.createElement('p')
    $(title).addClass("gaugeTitle")
    $(title).text("Maintenance Activity")
    contentView.append(title)
}

function setProjectAsNotAnalyzed() {
    openButton.addClass("openButtonGray")
    contentView.html("<p>This project hasn't been analysed yet...</p>")
}

function setProjectAsUnmaintained() {
    contentView.html("<p>Seems to be unmaintained...</p>")
}


function createChart(result) {
    let chartContainer = document.createElement("div")
    chartContainer.id = "gauge"
    $(chartContainer).addClass("chartContainer")
    contentView.append(chartContainer)
    const g = new JustGage({
        id: "gauge",
        value: result,
        min: 0,
        max: 100,
        width: 300,
        height: 200,
        label: "Overall Score",
        labelMinFontSize: 14,
        labelFontColor: "#000",
        decimals: 1,

        customSectors: {
            percents: true,
            ranges: [{
                color: lowLMAColor,
                lo: 0,
                hi: 24
            }, {
                color: mediumLMAColor,
                lo: 25,
                hi: 74
            }, {
                color: highLMAColor,
                lo: 75,
                hi: 100
            }]
        }
    })
}

function handleMessage(request, sender, sendResponse) {
    const {full_name} = request
    const owner = full_name.split("/")[0]
    const name = full_name.split("/")[1]
    setContentTitle()

    openButton.click(e => {
        sendResponse(full_name)
    })

    firebase.database().ref("/projects").once("value").then((res) => {
            const projectOwner = res.val()[`${owner}`]
            if (projectOwner) {
                const result = (projectOwner[`${name}`])
                if (result) {
                        setArrowBackground(result.lma)
                        if(result.lma >= 0) 
                            createChart(result.lma)
                        else
                            setProjectAsUnmaintained()
                    }
                else {
                    setProjectAsNotAnalyzed()
                }
            }
            else {
                setProjectAsNotAnalyzed()
            }
        }
    )

    $('.repohead h1').after(openButton)
    openButton.append(arrowContainer)
    arrowContainer.html(leftArrow)
    openButton.after(contentView)
    return true
}

chrome.runtime.onMessage.addListener(handleMessage)

