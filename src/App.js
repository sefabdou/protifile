import Nav from "./componenets/Nav";
import AboutAs from "./NavSection/AboutAs";
import Services from "./NavSection/Services";
import './App.css'

function App() {
  return (
    <div className="App">
     
      <div> <Nav /> </div>
      {/* <div> <AboutAs /> </div>  */}
      <div> <Services/> </div> 
    </div>
  );
}

export default App;
