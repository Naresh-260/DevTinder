import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "./LoginPage"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../Utils/appStore"
import Feed from "./Feed"
import Profile from "./Profile"
import Connections from "./Connections"
import Requests from "./Requests"
import LandingPage from "./LandingPage"
import ErrorPage from "./ErrorPage"


function App() {
  return (
    <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
          <Route path="/landingPage" element = {<LandingPage/>}/>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
            <Route path="/" element={<Body/>}>
                <Route path = "/feed" element = {<Feed/>}/>
                <Route path = "/profile" element = {<Profile/>}/>
                <Route path = "/connections" element = {<Connections/>}/>
                <Route path = "/requests" element = {<Requests/>}/>
            </Route>
            <Route path='*' element = {<ErrorPage/>}/>
            
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App
