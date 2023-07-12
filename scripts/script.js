const container = document.querySelector('.container')
const button = document.querySelector('button')
const DEFAULT_SIZE = 16
let GRID_SIZE = DEFAULT_SIZE
// GRID_SIZE = 32

for (let i = 0; i < GRID_SIZE; i++) {
  const row = document.createElement('div')
  row.classList.add('row')
  
  for (let i = 0; i < GRID_SIZE; i++) {
    const div = document.createElement('div')
    div.classList.add('square')
    row.appendChild(div)
  }
  
  container.appendChild(row)
}

const squares = document.querySelectorAll('.square')

for (let i = 0; i < squares.length; i++) {
  const element = squares[i];
  element.addEventListener('mouseover' , () => {
    element.classList.add('paintColor')
  })
}

button.addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.classList.remove('paintColor')
  }
})

