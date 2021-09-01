import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to="/" />
      </Switch>
    
      <Footer/>
    </>
  )
}

export default App
