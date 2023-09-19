import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';

const sportingGoods = [{id:1, name: 'Football', price:49.99},{id:2, name:'Baseball', price:9.99},{id:3, name:'Basketball', price:29.99}]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ryan Lozano - Fullstack Developer from the Philippines
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TextInput/>
      <Checkbox/>
      <table>
        <tbody>
          <Header/>
          <Category/>
          <Items items={sportingGoods}/>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
