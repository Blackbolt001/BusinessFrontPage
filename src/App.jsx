import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Background from "./components/background/Background";
import Comics from "./components/comics/Comics";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Header/>
           <div className="main">
            <Background/>
            <div className="sections">
            <Main/>
            <Comics/>
            </div>
            </div>
        </div>
    );
}

export default App;