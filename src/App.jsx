// Imports
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import './styles/index.scss';

// App
const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
};

export default App;