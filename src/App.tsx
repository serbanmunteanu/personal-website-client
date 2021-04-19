import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import LearningScreen from './screens/LearningScreen';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreeen';
import { UserContext } from './state.provider';
import MyAccountScreen from './screens/MyAccountScreen';
import ScrollToTop from './scrollToTop';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src='../Dark/29.svg' className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Router>
      <UserContext.Provider value={{user, setUser}}>
      <Navbar/>
      <ScrollToTop />
        <Switch> 
            <Route exact path="/">
              <HomeScreen/>
            </Route>
            <Route exact path="/services">
              <ServicesScreen/>
            </Route>
            <Route exact path="/learning">
              <LearningScreen/>
            </Route>
            <Route exact path="/about-me">
              <AboutMeScreen/>
            </Route>
            <Route exact path="/login">
              <LoginScreen />
            </Route>
            {
              !user ? <LoginScreen />: (
                <Route exact path="/my-account"> 
                  <MyAccountScreen />
                </Route>
            )}
          </Switch>
          <Footer /> 
      </UserContext.Provider>
      </Router>
    </div>
    </Suspense>
  );
}

export default App;
