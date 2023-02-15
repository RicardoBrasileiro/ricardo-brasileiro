import { useState } from 'react'
import About from './sections/About'
import { GlobalStyle } from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle />
      <About />
    </div>
  )
}

export default App
