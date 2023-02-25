import logo from './logo.svg';
import './App.css';


const Person = () => {

  return(
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h3>Age: 30</h3>
    </>
  )
}

const App = () =>{

  const name = null;
  const isNameShowing = false;
  const isUserLoggedIN = true;

  return (
    <div className="App">
      <h1>
        <Person/>
      </h1>
      <Person/>
      <Person/> 
      
    </div>
  );
}

export default App;
