import './App.css';
import {Header} from "../components/Header/Header";
import {FullNewsPage} from "../pages/FullNewsPage/FullNewsPage";
import React from "react";
import {Footer} from "../components/Footer/Footer";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {SelectedNews} from "../pages/SelectedNews/SelectedNews";
import {PersonalPage} from "../pages/PersonalPage/PersonalPage";

import {
    Routes,
    Route,
} from "react-router-dom";
import {store} from "../redux/store";


function App() {
console.log(store.getState())
    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <div className='contentWrap'>
                    <Routes>
                        <Route path="/" element={<NewsPage/>}/>
                        <Route path="/post" element={<NewsPage/>}/>
                        <Route path="/post/:id" element={<FullNewsPage/>}/>
                        <Route path="/like" element={<SelectedNews/>}/>
                        <Route path="/user" element={<PersonalPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
