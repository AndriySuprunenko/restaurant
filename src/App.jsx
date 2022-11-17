// Imports
import WhatWeOffer from 'components/what-we-offer/WhatWeOffer';
import Navigation from './components/header/Navigation';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Offers from './components/offers/Offers';
import Footer from 'components/footer/Footer';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Blog from 'components/blog/Blog';
// Scss
import './styles/index.scss';

// App
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Banner />
      <Home />
      <Menu />
      <Offers />
      <WhatWeOffer />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
