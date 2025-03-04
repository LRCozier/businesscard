import './App.css'
import About from './components/about'
import Footer from './components/footer'

const App = () => {

  return (
    <>
    <main className='business-card-main'>
      <About/>
      <Mail label='Email Me' mailto='mailto:lrcozier@gmail.com'/>
      <Footer/>
    </main>
    </>
  )
}

export default App
