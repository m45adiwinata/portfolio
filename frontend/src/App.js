import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" name="Home" component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
