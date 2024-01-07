
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar  from './components/Navbar'
// import Notification from './components/Notification'
import ScrollUp from './components/ScrollUp';



const App = () => {
  const hommie={
    background: "linear-gradient(to bottom , #581b1be6, rgba(223, 43, 85, 0.2)), url('/Images/test.png')"
  }
  
  
  return  (
    <div className='container'>
        <div className='app-body'>
          <Navbar/>
          <main className='homepage' style={hommie}>
            <div className='countria-section'>
              <h1>Countria</h1>
              <p>Countries information,current weather forecast in a fast and exciting manner</p>
            </div>
          </main>
          <Content  />        
         </div>
         <ScrollUp />
         <Footer />
    </div>
  )
}

export default App
