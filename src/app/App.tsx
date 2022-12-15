import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {FilterList} from "../components/FilterList/FilterList";

function App() {
  return (
    <div className="App">

        {/*<RegistrationPage/>*/}
        {/*<LoginPage/>*/}
        <div className='wrapper'>
            <FilterList/>
            {/*<Header/>*/}
            {/*<NewsPage/>*/}
            {/*<Footer/>*/}
        </div>

    </div>
  );
}

export default App;
