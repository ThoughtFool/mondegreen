import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

    const code = new URLSearchParams(window.location.search).get("code");

    return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
