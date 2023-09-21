import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';

const sportingGoods = [{id:1, name: 'Football', price:49.99},{id:2, name:'Baseball', price:9.99},{id:3, name:'Basketball', price:29.99}]

function App() {

  const handleClick = () =>{
    alert('Clicked')
  }

  return (
    <div className="App">
      <TextInput/>
      <Checkbox/>
      <button onClick={handleClick}>Submit</button>
      <table>
        <tbody>
          <Header/>
          <Category/>
          <Items items={sportingGoods} includePrice/>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
