import './App.css'

// components import
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// import pages
import Home from './pages/home/Home'
import BrowseTheRange from './pages/browseTheRange/BrowseTheRange'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <BrowseTheRange />
      </main>
      <Footer />
    </div>
  )
}

export default App
