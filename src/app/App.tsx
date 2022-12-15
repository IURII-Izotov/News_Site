import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {RegistrationForm} from "../pages/RegistrationPage/RegistrationForm/RegistrationForm";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div className="App">
        <RegistrationPage/>
        <div className='wrapper'>
            <Header/>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
