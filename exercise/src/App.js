import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from './layout/NavBar'
import DashBoard from "./layout/DashBoard";

const App= ()=> {
  return (
    <div className="App">
        <NavBar />
        <div className="container">
          <DashBoard/>
        </div>
    </div>
  );
}

export default App;
