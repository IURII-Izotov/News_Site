import './App.css';
import {Header} from "../components/Header/Header";
import {FullNews} from "../components/FullNews/FullNews";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import React from "react";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {Footer} from "../components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <RegistrationPage/>
        <LoginPage/>
        <div className='wrapper'>
            <Header/>
            <div className='contentWrap'>
                <FullNews />
                {/*<NewsPage />*/}
            </div>

            <Footer/>
        </div>

    </div>
  );
}

export default App;
