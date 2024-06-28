import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slides from "./Components/Slides";
import Gallery from "./Components/Gallery/Gallery";
import Informations from "./Components/Info/Informations";
const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Slides />} />
          <Route path="informations" element={<Informations />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
