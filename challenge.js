let counter = document.getElementById('counter')
let number = parseInt(counter.innerText)
let plus = document.getElementById('+')
let minus = document.getElementById('-')
let like = document.getElementById('<3')
let likeList = document.querySelector('.likes')
let pause = document.getElementById('pause')
let paused = 'false'
let commentForm = document.getElementById('comment-form')
let commentList = document.getElementById('list')

// automatically adds one to counter every second
let interval = setInterval(addOne, 1000)
// adds one to counter when + is clicked
plus.addEventListener('click', addOne)
// subtracts one from counter when - is clicked
minus.addEventListener('click', subtractOne)
// like a number when <3 is clicked
like.addEventListener('click', function(){likeANumber(number)})
// pause the game when pause is clicked
pause.addEventListener('click', pauseGame)
// add a comment when form is submitted
commentForm.addEventListener('submit', comment)

// adds one to counter
function addOne() {
  number += 1
  counter.innerText = number
  return counter.innerText
}
// subtracts one from counter
function subtractOne() {
  number -= 1
  counter.innerText = number
  return counter.innerText
}
//adds a like to number
let likeANumber = function likeNumber(number) {
  let likedNumbers = []
  return function (number) {
    if (!likedNumbers.includes(number)) {
      likedNumbers.push(number)
      numberOfLikes = 1
      let likeListItem = document.createElement('li')
      likeListItem.id = number
      likeListItem.innerHTML = `<li>${number} has been liked ${numberOfLikes} time</li>`
      return likeList.appendChild(likeListItem)
    } else {
      numberOfLikes += 1
      likeListItem = document.getElementById(number)
      likeListItem.innerHTML = `<li>${number} has been liked ${numberOfLikes} times</li>`
      return likeList
    }
  }
}()

//pause the game
function pauseGame() {
  if (paused === 'false') {
    clearInterval(interval)
    pause.innerText ='resume'
    paused = 'true'
    plus.disabled = true
    minus.disabled = true
    like.disabled = true
  } else {
    interval = setInterval(addOne, 1000)
    pause.innerText ='pause'
    paused = 'false'
    plus.disabled = false
    minus.disabled = false
    like.disabled = false
  }
}

//add a comment
function comment(event) {
  let input = document.querySelector('input').value
  let newComment = document.createElement('p')
  newComment.innerText = input
  commentList.appendChild(newComment)
  commentForm.reset()
  event.preventDefault()
}
