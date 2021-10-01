import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

// Pages
import Home from './pages/Home/Home'
import MyNetwork from './pages/MyNetwork/MyNetwork'
import Jobs from './pages/Jobs/Jobs'
import Messaging from './pages/Messaging/Messaging'
import Notification from './pages/Notification/Notification'

function App() {
   const user = useSelector(selectUser)

   return (
      <Router>
         <div className="app">
            <Header />
            <Switch>
               {!user ? (
                  <Login />
               ) : (
                  <>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/mynetwork" component={MyNetwork} />
                     <Route exact path="/jobs" component={Jobs} />
                     <Route exact path="/messaging" component={Messaging} />
                     <Route exact path="/notifications" component={Notification} />
                  </>
               )}
            </Switch>
         </div>
      </Router>
   )
}

export default App
