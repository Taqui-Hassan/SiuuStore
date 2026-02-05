import { Header, Footer } from './components'
import Home from './pages/Home' // Import the new page
import './App.css'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      
      <main className='grow'>
          <Home />
      </main>
      
      <Footer />
    </div>
  )
}

export default App