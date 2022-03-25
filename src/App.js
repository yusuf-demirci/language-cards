import "./App.css";
import Cards from "./components/Cards/Cards";
import reactImg from "./assets/react.svg";

function App() {
    return (
        <div className="App">
            <img className="react-img" src={reactImg} alt="react" />
            <Cards />
        </div>
    );
}

export default App;
