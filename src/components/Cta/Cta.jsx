import "./Cta.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/cta-1.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Cta = () => {
  return (
    <section className="cta">
      <Wrapper>
        <div className="cta__container">
          <div className="cta__flex">
            <img src={Img} alt="cta-img" className="cta__img" />
            <div className="cta__text">
              <h2>Try Our Specials</h2>
              <button className="button-primary">Go To Menu</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Cta;
