import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import  './components/general.scss'


function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <Header />
        <Article />
      </div>
    </div>
  );
}

export default App;
