import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {NewsPage} from "../pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">

        {/*<RegistrationPage/>*/}
        {/*<LoginPage/>*/}
        <div className='wrapper'>
            <Header/>
            <NewsPage/>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
