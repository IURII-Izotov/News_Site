import './App.css';
import {Header} from "../components/Header/Header";
import {FullNewsPage} from "../pages/FullNewsPage/FullNewsPage";
import React, {useEffect, useState} from "react";
import {Footer} from "../components/Footer/Footer";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {SelectedNews} from "../pages/SelectedNews/SelectedNews";
import {PersonalPage} from "../pages/PersonalPage/PersonalPage";

import {
    Routes,
    Route,
} from "react-router-dom";

import {useGetNewsQuery} from "../api/post.api";
import {useSelector} from "react-redux";


function App() {
    const {filterValue,searchText} = useSelector((state:any) => state.filter)
    let {data,isFetching,isLoading}=useGetNewsQuery({searchText,filterValue});
    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <div className='contentWrap'>
                    <Routes>
                        <Route path="/" element={<NewsPage data={data} isLoading={isLoading}/>}/>
                        <Route path="/post" element={<NewsPage data={data} isLoading={isLoading}/>}/>
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
