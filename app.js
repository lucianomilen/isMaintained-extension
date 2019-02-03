// create element
const openButtonElement = document.createElement(`div`)
const contentViewElement = document.createElement(`div`)
const arrowContainerElement = document.createElement(`div`)
const leftArrowElement = document.createElement(`img`)
const rightArrowElement = document.createElement(`img`)
const contentTitleElement = document.createElement(`div`)
const contentLevelElement = document.createElement(`div`)

// set img src
rightArrowElement.src = chrome.extension.getURL(`images/right-chevron.svg`)
leftArrowElement.src = chrome.extension.getURL(`images/left-chevron.svg`)

// jquery queries
const openButton = $(openButtonElement)
const contentView = $(contentViewElement)
const leftArrow = $(leftArrowElement)
const rightArrow = $(rightArrowElement)
const arrowContainer = $(arrowContainerElement)
const contentTitle = $(contentTitleElement)
const contentLevel = $(contentLevelElement)

// constants
const lowLMAColor = `#ff6a00`
const mediumLMAColor = `#d5ff2f`
const highLMAColor = `#28a745`
const unmaintainedColor = `#bf3500`
const unverifiedColor = `#dddddd`

// class adding
rightArrow.addClass(`arrowIcon`)
leftArrow.addClass(`arrowIcon`)
openButton.addClass(`openButton`)
contentView.addClass(`contentView`)
contentTitle.addClass(`contentTitle`)
contentLevel.addClass(`contentLevel`)

// appends
contentView.append(contentTitle)
contentView.append(contentLevel)

// events
openButton.click(() => {
  if (contentView.is(`:visible`)) {
    arrowContainer.html(leftArrow)
    contentView.css(`display`, `none`)
    openButton.css(`right`, `0`)
  } else {
    arrowContainer.html(rightArrow)
    openButton.css(`right`, `190px`)
    contentView.css(`display`, `flex`)
    contentView.css(`flex-direction`, `column`)
  }
})

// functions
function setArrowBackgroundByLevel(level) {
  switch (level) {
    case `Borderline`:
    openButton.css(`background-color`, lowLMAColor)
    break
    case `Fair`:
    openButton.css(`background-color`, mediumLMAColor)
    break
    case `High`:
    openButton.css(`background-color`, highLMAColor)
    break
  }
}

function setContentTitle() {
  contentTitle.text(`Maintenance Activity`)
}

function setProjectAsNotAnalyzed() {
  openButton.addClass(`openButtonGray`)
  contentLevel.html(`
    <p>This project hasn't been analysed yet...</p>`)
}

function setProjectStatus(flag) {
  switch (flag) {
    case -1:
    contentLevel.html(`<p>This project seems to be unmaintained.</p>`)
    openButton.css(`background-color`, unmaintainedColor)
    break
    case -2:
    contentLevel.html(`<p>This project does not use GitHub for issues.</p>`)
    openButton.css(`background-color`, unverifiedColor)
    break
    case -3:
    contentLevel.html(`<p>This project is a mirror.</p>`)
    openButton.css(`background-color`, unverifiedColor)
    break
    case -4:
    contentLevel.html(`<p>This project contains only documentation.</p>`)
    openButton.css(`background-color`, unverifiedColor)
    break
  }
}

function setScore(level) {
  const scoreTextElement = document.createElement(`p`)
  const scoreText = $(scoreTextElement)
  scoreText.addClass(`score`)
  scoreText.text(level)
  scoreText.addClass(level)
  contentLevel.html(scoreText)
}

function setLoading() {
  $(contentLevel).html(`<p>Loading...</p>`)
}

setLoading()

function handleMessage({ maintenanceInfo }, sender, sendResponse) {
  setContentTitle()

  if (maintenanceInfo) {
    const { level, lma } = maintenanceInfo
    if (level) {
      setScore(level)
      setArrowBackgroundByLevel(level)
    } else {
      setProjectStatus(lma)
    }
  } else {
    setProjectAsNotAnalyzed()
  }

  openButton.click(e => {
    chrome.runtime.sendMessage({ event: { type: 'click' } })
  })

  $(`.repohead h1`).after(openButton)
  openButton.append(arrowContainer)
  arrowContainer.html(leftArrow)
  openButton.after(contentView)
}

chrome.runtime.onMessage.addListener(handleMessage)
