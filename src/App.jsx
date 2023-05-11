import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="main">
            <Main/>
            <div className="sections">
            <Main/>
            </div>
            </div>
        </div>
    );
}

export default App;