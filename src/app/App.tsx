import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {RegistrationForm} from "../pages/RegistrationPage/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="App">
        <div className='wrapper'>
            <RegistrationForm/>
            <Header/>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
