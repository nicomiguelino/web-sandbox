const initApp = () => {
  console.log('We\'ll be using the Web Storage API to store our data.')
  const names = ['Robert', 'Jimmy', 'John', 'Bonzo']
  const defaultName = 'Paul'

  const randomizeButton = document.querySelector('#randomize-name')
  const clearButton = document.querySelector('#clear-name')
  const name = document.querySelector('#name')

  name.innerText = localStorage.getItem('name') || defaultName

  randomizeButton.addEventListener('click', () => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    localStorage.setItem('name', randomName)
    name.innerText = localStorage.getItem('name')
  })

  clearButton.addEventListener('click', () => {
    localStorage.setItem('name', defaultName)
    name.innerText = localStorage.getItem('name')
  })
}

initApp()
