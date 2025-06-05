import './App.css';
import Timer from "./components/timer";


function App() {
    return (
        <div style={{
            backgroundColor: "pink",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Timer></Timer>
        </div>
    );
}


export default App;