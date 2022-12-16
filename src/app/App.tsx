import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {FullNews} from "../components/FullNews/FullNews";


function App() {
  return (
    <div className="App">

        {/*<RegistrationPage/>*/}
        {/*<LoginPage/>*/}
        <div className='wrapper'>
            <Header/>
            <div className='contentWrap'>
                <FullNews/>
            </div>

            <Footer/>
        </div>

    </div>
  );
}

export default App;
