import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componenti/Nav'
import Nav from './componenti/Nav'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from './componenti/Card'
import Footer from './componenti/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

 
    
      <Nav></Nav>
     <div className='container'>
      <div className='row row-cols-2'>
        <div className='col'>
        <Card titolo='tokyo' imgurl="https://th.bing.com/th/id/OIP.3V2qdnLqVmvqzb4jKSNPoQHaEo?rs=1&pid=ImgDetMain">giappone</Card> 
      
        </div>
        {/* <div className='col'>
        <Card titolo='roma' imgurl="https://www.luoghidiinteresse.it/wp-content/uploads/00-Roma-Colosseo.jpg">italia</Card> 
      
        </div> */}
        <div className='col'>
        <Card titolo='cairo'imgurl="https://th.bing.com/th/id/OIP.2PFBJ0Z4TO6C3u1dNSDqewHaEo?rs=1&pid=ImgDetMain" >egitto</Card> 
      
        </div>
      </div>
     </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    
    <Footer></Footer>
    </>
  )
}

export default App
