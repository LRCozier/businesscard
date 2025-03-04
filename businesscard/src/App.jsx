import './App.css'
import About from './components/about'
import Footer from './components/footer'
import Mail from './components/Mail'

const App = () => {

  return (
    <>
    <main className='business-card-main'>
      <About/>
      <Mail mailto='lrcozier@gmail.com' label='Email Me'/>
      <Footer/>
    </main>
    </>
  )
}

export default App
