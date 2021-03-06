// create element
const openButtonElement = document.createElement(`div`)
const contentViewElement = document.createElement(`div`)
const arrowContainerElement = document.createElement(`div`)
const leftArrowElement = document.createElement(`img`)
const rightArrowElement = document.createElement(`img`)
const contentTitleElement = document.createElement(`div`)
const contentLevelElement = document.createElement(`div`)
const lastMergedPullDateTextElement = document.createElement(`p`)
const lastCommitDateTextElement = document.createElement(`p`)
const lastClosedIssueDateTextElement = document.createElement(`p`)
const unmaintainedByOwnerTextElement = document.createElement(`p`)

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
const lastMergedPullDateText = $(lastMergedPullDateTextElement)
const lastCommitDateText = $(lastCommitDateTextElement)
const lastClosedIssueDateText = $(lastClosedIssueDateTextElement)
const unmaintainedByOwnerText = $(unmaintainedByOwnerTextElement)

// constants
const lowLMAColor = `#ff6a00`
const mediumLMAColor = `#d5ff2f`
const highLMAColor = `#28a745`
const unmaintainedColor = `#bf3500`
const unverifiedColor = `#dddddd`

const firebaseConfig = {
    apiKey: `AAAA5vjQHxs:APA91bHUflcKyy9kkLxu7Q--trmLWgp8mP6QAvuCpqM5ffEmkVKF6kSRRiKhz4bJENwFL2UvZHCaveWGH7gtHrA_3Gp03ztcOgiSoJeZ4pW06HeJttTbPEuL515_enXK25fSd2QpvTKW`,
    authDomain: `992016867099.firebaseapp.com`,
    databaseURL: `https://level-maintenance-plugin.firebaseio.com`,
    storageBucket: `level-maintenance-plugin.appspot.com`
}

// class adding
rightArrow.addClass(`arrowIcon`)
leftArrow.addClass(`arrowIcon`)
openButton.addClass(`openButton`)
contentView.addClass(`contentView`)
contentTitle.addClass(`contentTitle`)
contentLevel.addClass(`contentLevel`)
lastMergedPullDateText.addClass(`dateText`)
lastCommitDateText.addClass(`dateText`)
lastClosedIssueDateText.addClass(`dateText`)

// appends
contentView.append(contentTitle)
contentView.append(contentLevel)
contentView.append(lastCommitDateText)
contentView.append(lastMergedPullDateText)
contentView.append(lastClosedIssueDateText)

// firebase init
firebase.initializeApp(firebaseConfig)

// events
openButton.click(() => {
    if (contentView.is(`:visible`)) {
      arrowContainer.html(leftArrow)
      contentView.css(`display`, `none`)
      openButton.css(`right`, `0`)
    } else {
      arrowContainer.html(rightArrow)
      openButton.css(`right`, `280px`)
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

function setProjectStatus( {lma, unmaintained_by_owner} ) {
    switch (lma) {
        case -1:
          contentLevel.html(`<p class="unmaintainedText">This project seems to be unmaintained.</p>`)
          openButton.css(`background-color`, unmaintainedColor)

          break
        case -2:
          contentLevel.html(`<p class="unmaintainedText">This project does not use GitHub for issues.</p>`)
          openButton.css(`background-color`, unverifiedColor)
          break
        case -3:
          contentLevel.html(`<p class="unmaintainedText">This project is a mirror.</p>`)
          openButton.css(`background-color`, unverifiedColor)
          break
        case -4:
          contentLevel.html(`<p class="unmaintainedText">This project contains only documentation.</p>`)
          openButton.css(`background-color`, unverifiedColor)
          break
    }
    contentView.append(unmaintainedByOwnerText)
    unmaintainedByOwnerText.addClass(`dateText`)
    unmaintainedByOwnerText.text(`Marked unmaintained by author: ${unmaintained_by_owner ? 'Yes' : 'No'}`)
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

function setRepoDates( {last_closed_issue_date, last_commit_date, last_merged_pull_date} ) {
  lastCommitDateText.text(`Last commit: ${last_commit_date}`)
  lastMergedPullDateText.text(`Last merged pull request: ${last_merged_pull_date}`)
  lastClosedIssueDateText.text(`Last closed issue: ${last_closed_issue_date}`)
}

function handleMessage(request, sender, sendResponse) {
  const {full_name} = request
  const owner = full_name.split(`/`)[0]
  const name = full_name.split(`/`)[1]
  setContentTitle()
  setLoading()

    openButton.click(e => {
      sendResponse(full_name)
    })

    firebase
        .database()
        .ref(`/projects`)
        .once(`value`)
        .then(res => {
          const projectOwner = res.val()[`${owner}`]
            if (projectOwner) {
              const result = projectOwner[`${name}`]
                if (result) {
                    if (result.level) {
                      setScore(result.level)
                      setArrowBackgroundByLevel(result.level)
                    } else {
                      setProjectStatus(result)
                    }
                    setRepoDates(result)
                } else {
                  setProjectAsNotAnalyzed()
                }
            } else {
              setProjectAsNotAnalyzed()
            }
        })

  $(`.repohead h1`).after(openButton)
  openButton.append(arrowContainer)
  arrowContainer.html(leftArrow)
  openButton.after(contentView)
  return true
}

chrome.runtime.onMessage.addListener(handleMessage)
