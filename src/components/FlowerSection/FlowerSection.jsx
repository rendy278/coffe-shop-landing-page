import "./FlowerSection.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/flower-1.png";
import Img2 from "../../assets/flower-2.png";
import Img3 from "../../assets/flower-3.png";
import Img4 from "../../assets/flower-4.png";
import Img5 from "../../assets/flower-5.png";
import Img6 from "../../assets/flower-6.png";
import Img7 from "../../assets/flower-7.png";
import Img8 from "../../assets/flower-8.png";
import Img9 from "../../assets/flower-9.png";

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
const data = [
  {
    name: "Brief",
    price: "6$",
    img: Img1,
  },
  {
    name: "Corrected",
    price: "10$",
    img: Img2,
  },
  {
    name: "Raf",
    price: "10$",
    img: Img3,
  },
  {
    name: "Cappucino",
    price: "8$",
    img: Img4,
  },
  {
    name: "Macchiato",
    price: "9$",
    img: Img5,
  },
  {
    name: "Mocha",
    price: "16$",
    img: Img6,
  },
  {
    name: "Ice",
    price: "11$",
    img: Img7,
  },
  {
    name: "Espresso Laccino",
    price: "10$",
    img: Img8,
  },
  {
    name: "Irish Coffee",
    price: "6$",
    img: Img9,
  },
];

const FlowerSection = () => {
  return (
    <section className="flower" id="menu">
      <Wrapper>
        <div className="flower__text">
          <h2>New Flower</h2>
          <p className="p-2">
            They are very soft dont leave anywhere there is any pain. He likes
            to care of his family. The exercise will come to fruition.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
          autoPlay={true}
        >
          {data.map(({ name, price, img }, index) => (
            <div key={index} className="flower__card">
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{price}</p>
            </div>
          ))}
        </Carousel>
        <div className="flower__btn">
          <button className="button-primary">Go To Menu</button>
        </div>
      </Wrapper>
    </section>
  );
};

export default FlowerSection;
