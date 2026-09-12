import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "./LoginPage"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../Utils/appStore"
import Feed from "./Feed"
import Profile from "./Profile"

function App() {
  return (
    <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body/>}>
                <Route path="/login" element = {<LoginPage/>}/>
                <Route path = "/feed" element = {<Feed/>}/>
                <Route path = "/profile" element = {<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App
