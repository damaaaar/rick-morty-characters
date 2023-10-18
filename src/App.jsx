import './App.css'
import Card from './components/Card'

function App () {
  return (
    <>
      <header className='header'>
        <h1 className='header-title'>Rick and Morty Characters</h1>
      </header>
      <main className='content'>
        <Card />
      </main>
    </>
  )
}

export default App
