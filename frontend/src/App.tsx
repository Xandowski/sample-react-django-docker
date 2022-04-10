import dockerLogo from './assets/docker.png'
import reactjsLogo from './assets/logo.svg'

import './styles/App.css'

function App() {
    return (
      <div className='Wrapper'>
        <div className="content">
          <img src={reactjsLogo} className="Reactjs-logo" alt="reactjs-logo" />
          <img src={dockerLogo} className="Docker-logo" alt="docker-logo" />
        </div>
        <h1>Hello from Docker</h1>
      </div>
      
    )
}

export default App
