// Imports
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import './styles/index.scss';

// App
const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
      <Home></Home>
      <Menu></Menu>
    </div>
  );
};

export default App;