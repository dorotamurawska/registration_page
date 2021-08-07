import './App.css';

import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BackgroundApp from "./views/BackgroundApp";
import CardsNumberPage from "./pages/CardsNumberPage";
import ErrorPage from "./pages/ErrorPage";
import NicknamePage from "./pages/NicknamePage";
import SuccessAlert from "./components/SuccessAlert";
import Timer from './components/Timer';


const App = () => {
  const [nickname, setNickname] = useState('');
  const [cardsNumber, setCardsNumber] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [counter, setCounter] = React.useState(20);

  const showTimer = counter <= 20 && counter > 0 ? <Timer counter={counter} /> : null

  useEffect(() => {
    if (nickname === "" && document.location.pathname === '/cards-number') {
      window.location.replace(`${document.location.origin}/`)
    }
  }, []);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0 && nickname) {
      if (nickname) {
        setCounter(20);
      }
      setNickname("");
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="page-header">
            {showTimer}
            <SuccessAlert
              visibleAlert={visibleAlert}
              setVisibleAlert={setVisibleAlert} />
            <div className="content">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <NicknamePage
                      {...props}
                      nickname={nickname}
                      setNickname={setNickname}
                      setCardsNumber={setCardsNumber}
                      setCounter={setCounter} />)} />
                <Route
                  path="/cards-number"
                  exact
                  render={(props) => (
                    nickname ? (<CardsNumberPage
                      {...props}
                      cardsNumber={cardsNumber}
                      setCardsNumber={setCardsNumber}
                      nickname={nickname}
                      setNickname={setNickname}
                      setVisibleAlert={setVisibleAlert}
                      counter={counter}
                      setCounter={setCounter} />) : null)} />
                <Route
                  component={ErrorPage} />
              </Switch>
              <BackgroundApp />
            </div>
          </div>
        </div>
      </div >
    </Router>
  );
};

export default App;
