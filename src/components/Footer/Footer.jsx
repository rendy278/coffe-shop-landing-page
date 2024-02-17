import "./Footer.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <img src={Logo} alt="logo" />
        <ul className="footer__links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
        </ul>
      </Wrapper>
    </footer>
  );
};

export default Footer;
