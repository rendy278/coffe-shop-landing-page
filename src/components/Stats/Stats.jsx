import "./Stats.scss";
import Wrapper from "../wrapper/Wrapper";
const Stats = () => {
  return (
    <section className="stats">
      <Wrapper className="stats__container">
        <div className="stats__point">
          <h1>10</h1>
          <p>Shoes</p>
        </div>
        <div className="stats__point">
          <h1>06</h1>
          <p>Years Of Experience</p>
        </div>
        <div className="stats__point">
          <h1>120+</h1>
          <p>Coffees</p>
        </div>
        <div className="stats__point">
          <h1>1200+</h1>
          <p>Reviews</p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Stats;
