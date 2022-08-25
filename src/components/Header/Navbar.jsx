import "./Navbar.css";
import img1 from "../../Images/Standard Collection 9.svg";
import img2 from "../../Images/Profile Button.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={img1} alt="" />
        <h4>fasthome</h4>
        <ul className="nav-list">
          <li>For Sale</li>
          <li>For Rent</li>
          <li>Daily Rental</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Advertise</button>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
