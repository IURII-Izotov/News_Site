import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter, Route, Routes,
} from "react-router-dom";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {store} from './redux/store'
import {Provider} from "react-redux";
import {AuthProvider, RequireAuth} from "react-auth-kit";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AuthProvider authType={'cookie'}
                  authName={'token'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/*" element={<RequireAuth loginPath={"/login"}><App/></RequireAuth>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    </AuthProvider>
);
reportWebVitals();
