import {BrowserRouter as Router, Route, Routes} from 'react-router'
import Nav from './components/Nav'
import Scp_Details from './components/Scp_Details'
import Home from './components/Home'

export default function App()
{
  return(
    <div>
      {/* monitors the URL bar for changes to the address */}
      <Router basename='/COMP6210-Assignment-1/'>
        {/* call the Nav component */}
        <Nav/>
        {/* render the current URL and displays the component */}
        <Routes>
          {/* if the URL path ends with the path=string, render it */}
          <Route path="/" element={<Home />} />
          
          <Route path="/Home" element={<Home />}/>
          {/* if the URL path ends with path=string, render the Scp_Details component with 
          the appropriate object. (:subject = wildcard) */}
          <Route path={"/objects/:subject"} element={<Scp_Details />}/>
        </Routes>
      </Router>
    </div>
  )
}
