import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import MyItems from './Pages/MyItems';

function App() {
  return (
    <div className="App">
      <Header />
      <MyItems />
      <Footer />
    </div>
  );
}

export default App;
