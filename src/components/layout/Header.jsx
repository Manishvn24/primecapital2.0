import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50"
    >
      <Topbar />
      <Navbar/>
    </header>
  );
};

export default Header;
