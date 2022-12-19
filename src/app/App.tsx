import './App.css';
import {Header} from "../components/Header/Header";
import {FullNews} from "../components/FullNews/FullNews";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import React from "react";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {Footer} from "../components/Footer/Footer";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {SelectedNews} from "../pages/SelectedNews/SelectedNews";
import {PersonalData} from "../components/PersonalData/PersonalData";


function App() {
  return (
    <div className="App">
        <RegistrationPage/>
        <LoginPage/>
        <div className='wrapper'>
            <Header subMenu={true}/>
            <div className='contentWrap'>
                {/*<FullNews />*/}
                {/*<NewsPage />*/}
                {/*<SelectedNews/>*/}
                <PersonalData/>
            </div>

            <Footer/>
        </div>

    </div>
  );
}

export default App;
