import logo from './';
import './App.css';
import Timer from "./Timer";
import Popup from "reactjs-popup";
import PopUp from "./PopUp";
import Pop from "./PopUp";
import rightArrow from"./arrow-right.svg"


function App() {
  return (
      <>
          <header>
              <div className="img-left">
                  <img src="left-header.svg"/>
              </div>
              <div className="logo">
                  <a href="index.html">
                      <img src="group.svg"/>
                  </a>
              </div>
              <div className="img-right">
                  <img src="right-header.svg"/>
              </div>
          </header>
          <main>
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <p className="p-main">UNDER CONSTRUCTION</p>
              <p className="p-under-main">We're making lots of improvements and will be back soon</p>
              <Timer day={24} month={7} year={2024}/>
              <p className="p-check">Check our event page when you wait:</p>
              <button onClick={handleButtonClick} className="GoEventButton">
                  <span>Go to the event</span>
                  <img src={rightArrow  }/>
              </button>
          </main>
          <footer>
              <Pop/>
          </footer>
      </>
  );
}
function handleButtonClick() {
    window.location.href = 'https://egorovagency.com/';
}
export default App;
