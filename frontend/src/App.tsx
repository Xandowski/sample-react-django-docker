import dockerLogo from './assets/docker.png'
import reactjsLogo from './assets/logo.svg'

import './styles/App.css'

function App() {
    return (
      <div className='Wrapper'>
          <img src={reactjsLogo} className="Reactjs-logo" alt="reactjs-logo" />
          
          <h1>
            Hello from D
            <span><img src={dockerLogo} className="Docker-logo" alt="docker-logo" /></span>
            cker
          </h1>

          <span>See the <a href="http://localhost:8000/api/todos">API</a></span>
      </div>
      
    )
}

export default App
