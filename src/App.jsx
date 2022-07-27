// Imports
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Offers from "./components/offers/Offers";
import './styles/index.scss';
import WhatWeOffer from "components/what-we-offer/WhatWeOffer";
import Blog from "components/blog/Blog";
import Form from "components/form/Form";
import Footer from "components/footer/Footer";
import Reviews from "components/slider/Reviews";

// App
const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
      <Home></Home>
      <Menu></Menu>
      <Reviews></Reviews>
      <Offers></Offers>
      <WhatWeOffer></WhatWeOffer>
      <Blog></Blog>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default App;