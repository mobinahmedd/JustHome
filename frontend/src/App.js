import logo from "@assets/LogoWhite.png";
import Navbar from "@navbar";
import Footer from "@footer";

function App() {
  return (
    <>
      <Navbar />
      <img style={{ backgroundColor: "black" }} src={logo} alt="Logo" />
      <h1>JustHome Frontend</h1>
      <Footer />
    </>
  );
}

export default App;
