import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/hero.png";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>
            Fresh <span>&</span> Tasty
          </h1>
          <p className="p-1">
            They are very soft and dont leave anywhere there is any pain. He
            likes to take care of his family. The exercise will come to
            fruition.
          </p>
          <button className="button-primary">Make a Reservation</button>
        </div>
        <div className="hero__right">
          <img src={Img} alt="hero" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
