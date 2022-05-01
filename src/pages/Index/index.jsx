import HandsHeld from "../../assets/svg/handsHeld";
import jumbo from "../../assets/png/jumbo.png";
import desktopJumbo from "../../assets/png/desktopJumbo.png";
import Cuate from "../../assets/png/cuate.png"
import Plug from "../../assets/svg/plug";
import Questions from "../../assets/svg/questions";
import HireButton from "../../components/hire button";
import otherProducts from "../../utils/otherProducts";
import products from "../../utils/products";
import Mask from '../../assets/png/mask.png'
import Bro from '../../assets/png/bro.png'
import "./index.scss";
import FooterFull from "../../components/footer full";

const Index = () => {
  return (
    <div className="index">
      <div className="container">
        <div className="jumbo">
          <img src={jumbo} alt="" />
        </div>
        <div className="cta">
          <p>
            We are a digital creative hub specializing in valuable and
            sustainable brand experiences. Remotely, we have helped clients in
            Nigeria as well as, Internationals to find, build and share their
            purpose with a larger audience, digitally
          </p>
          <p>
            But that’s not all. When you work with us, expect complete
            transparency, strategic recommendations, and premium service
          </p>
          <HireButton />
        </div>
        <div className="desktop_jumbo">
          <div className="left">
            <div className="img">
              <img src={desktopJumbo} alt="" />
            </div>
            <p>
              We are a digital creative hub specializing in valuable and
              sustainable brand experiences. Remotely, we have helped clients in
              Nigeria as well as, Internationals to find, build and share their
              purpose with a larger audience, digitally.
              <span>
                But that’s not all. When you work with us, expect complete
                transparency, strategic recommendations, and premium service
              </span>
            </p>
          </div>
          <div className="right">
              <img  src={Mask} alt/>
          </div>
        </div>
        <div className="choose">
            <div className="img">
                <img src={Bro} alt />
            </div>
          <Questions />
          <div className="questionDiv">
            <h3>Why Choose Us?</h3>
            <p>
              We are here to break boundaries and make the impossible possible
              for you! Get in touch with us or kindly request a free
              consultation or an instant quote through our contact form.
            </p>
          </div>
          <div className="img">
                <img src={Bro} alt />
            </div>
          <Questions />
        </div>
        <div className="cta_take">
          <a href="">Take me there</a>
        </div>
        <div className="products">
          {products.map((product, idx) => {
            return (
              <div key={idx} className="product">
                <div className="broad_image">
                  <img src={product.image} alt="" />
                </div>
                <div className="content">
                <p
                  className="tag"
                  style={{
                    color:
                      (idx === 0 && "#107596") ||
                      (idx === 1 && "#DAA142") ||
                      (idx === 2 && "#27AE60"),
                  }}
                >
                  {product.tag}
                </p>
                <h3>{product.title}</h3>
                <p className="body">{product.body}</p>
                <a href={product.url} className="action_button">
                  Learn more
                </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="otherProducts">
          <div className="title">
            <h4>Other services</h4>
            <p>Tap to make enquiries</p>
          </div>
          <div className="otherProduct_container">
            {otherProducts.map((otherProduct, idx) => {
              return (
                <div className="otherProduct">
                  <div className="image">
                    <img src={otherProduct.image} alt="" />
                  </div>
                  <p>{otherProduct.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="work">
        <HandsHeld />
        <div className="img_overlay">
            <div className="over_lay">
                 Work with us
            </div>
            <div className="img">
                <img src={Cuate} alt="" />
            </div>
        </div>
        <p>Work with us</p>
      </div>
      <div className="container">
        <div className="final_Cta">
          <p className="title">
            Let us take your ideas and your brand to the next level
          </p>
          <HireButton />
        </div>
        <div className="plug">
          <div className="center">
            <Plug />
            <p>Do you want to contact us?</p>
          </div>
        </div>
      </div>
      <FooterFull/>

    </div>
  );
};
export default Index;
