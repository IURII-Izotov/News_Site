import './App.css';
import {Header} from "../components/Header/Header";
import {FullNewsPage} from "../pages/FullNewsPage/FullNewsPage";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import React from "react";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {Footer} from "../components/Footer/Footer";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {SelectedNews} from "../pages/SelectedNews/SelectedNews";
import {PersonalData} from "../components/PersonalData/PersonalData";
import {PersonalPage} from "../pages/PersonalPage/PersonalPage";
import {AddNews} from "../components/PopUpAddNews/AddNews/AddNews";


function App() {
  return (
    <div className="App">
        <RegistrationPage/>
        <LoginPage/>
        <div className='wrapper'>
            <Header subMenu={true}/>
            <div className='contentWrap'>
                {/*<FullNewsPage />*/}
                {/*<NewsPage />*/}
                {/*<SelectedNews/>*/}
                <PersonalPage/>
                <AddNews/>
            </div>

            <Footer/>
        </div>

    </div>
  );
}

export default App;
