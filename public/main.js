const updateTeamName = teamNumber => {
  const input = document.querySelector(`.team-${teamNumber}-input`)
  const title = document.querySelector(`.team-${teamNumber}-name`)
  title.textContent = input.value
}
const updateScore = (teamNumber, scoreAdjustment) => {
  const score = document.querySelector(`.team-${teamNumber}-score`)
  const newScore = parseInt(score.textContent, 10) + scoreAdjustment
  score.textContent = newScore
}

const setupEventListeners = () => {
  document.addEventListener('click', e => {
    e.stopPropagation()
    switch (e.target.className) {
      case 'update-team-1-name':
        updateTeamName(1)
        break
      case 'update-team-2-name':
        updateTeamName(2)
        break
      case 'team-1-subtract-1-button':
        updateScore(1, -1)
        break
      case 'team-2-subtract-1-button':
        updateScore(2, -1)
        break
      case 'team-1-add-1-button':
        updateScore(1, 1)
        break
      case 'team-2-add-1-button':
        updateScore(2, 1)
        break
      default:
        break
    }
  })
}

const main = () => {
  setupEventListeners()
}

document.addEventListener('DOMContentLoaded', main)
