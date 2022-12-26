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
import {
    Routes,
    Route,
} from "react-router-dom";
import {newsApi} from "../api/newsApi";

function App() {
    // console.log(newsApi.getPostList().then((res)=>{
    //     console.log(res.data);
    // }))
    return (
        <div className="App">
            <div className='wrapper'>
                <Header subMenu={true}/>
                <div className='contentWrap'>
                    <Routes>
                        <Route path="/" element={<NewsPage/>}/>
                        <Route path="/fullnews" element={<FullNewsPage/>}/>
                        <Route path="/selected" element={<SelectedNews/>}/>
                        <Route path="/account" element={<PersonalPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
