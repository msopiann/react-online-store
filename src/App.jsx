import Brand from "./components/Brand";
import CallAction from "./components/CallAction";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Collection />
      <ProductList />
      <CallAction />
      <Footer />
    </>
  );
}

export default App;
