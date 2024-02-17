import "./OpenSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/open-1.webp";
import Img2 from "../../assets/open-2.webp";

const OpenSection = () => {
  return (
    <section className="open" id="about">
      <Wrapper className={"open__container"}>
        <div className="open__first">
          <div>
            <img src={Img1} alt="" />
          </div>
          <div className="open__text">
            <h2>The Best Day Starts Here</h2>
            <p>
              They are very soft dont leave anywhere there is any pain. He likes
              to care of his family. The exercise will come to fruition.
            </p>
          </div>
        </div>
        <div className="open__second">
          <div className="open__text">
            <h2>Open Everyday</h2>
            <p>
              They are very soft dont leave anywhere there is any pain. He likes
              to care of his family. The exercise will come to fruition.
            </p>
          </div>
          <img src={Img2} alt="" />
        </div>
      </Wrapper>
    </section>
  );
};

export default OpenSection;
