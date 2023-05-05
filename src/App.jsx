import './App.css'
import About from './components/About'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Square from './components/Square'
import Square1 from './components/Square1'
import Square2 from './components/Square2'
import Tecnology from './components/Tecnology'
import Works from './components/Works'



function App() {

  return (
    <>
      <Square col="bg-orange-400" width={"w-16"} height={"h-10"} />
      <Square1  col="bg-red-500" width={"w-8"} height={"h-8"} />
      <Square2 col="bg-emerald-300" width={"w-4"} height={"h-4"} />
      <Header />
      <Home />
      <About />
      <Certificate />
      <Tecnology />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default App
