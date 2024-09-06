import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero35 ${className}`}>
      <div className="question1" />
      <img
        className="image-155-icon"
        loading="lazy"
        alt=""
        src="/image-155@2x.png"
      />
      <img
        className="image-156-icon"
        loading="lazy"
        alt=""
        src="/image-156@2x.png"
      />
      <div className="image-columns">
        <div className="column-one">
          <div className="column-two">
            <div className="column-three">
              <div className="column-four">
                <div className="circle-icon-column">
                  <img
                    className="icon-number-circle-one"
                    loading="lazy"
                    alt=""
                    src="/-icon-number-circle-one.svg"
                  />
                </div>
                <div className="system-column">
                  <div className="system-wrapper">
                    <h1 className="system">System:</h1>
                  </div>
                  <div className="solar-w">
                    <div className="system1">System</div>
                    <div className="solarw">Solar(W)</div>
                  </div>
                </div>
              </div>
              <div className="battery-column">
                <div className="battery-column-child" />
                <div className="battery-select">
                  <div className="batterywh">Battery(Wh)</div>
                  <div className="select">Select:</div>
                </div>
              </div>
            </div>
            <div className="hero-wrapper3">
              <div className="hero36">
                <div className="div5">3000</div>
                <div className="empty-description">
                  <div className="div6">5000</div>
                </div>
                <div className="empty-hero">
                  <div className="hero37" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-columns">
          <div className="hero38">
            <div className="hero-column-value">
              <div className="empty-value">3500</div>
            </div>
            <div className="hero-column-value1">
              <div className="div7">5120</div>
            </div>
            <div className="hero39" />
          </div>
        </div>
        <div className="hero-parent1">
          <div className="hero40">
            <div className="div8">3500</div>
            <div className="div9">5120</div>
            <div className="hero41" />
          </div>
          <img
            className="image-157-icon"
            loading="lazy"
            alt=""
            src="/image-157@2x.png"
          />
        </div>
      </div>
      <div className="hero-inner">
        <div className="shopping-parent">
          <img
            className="shopping-icon"
            loading="lazy"
            alt=""
            src="/shopping.svg"
          />
          <div className="rectangle-div" />
          <div className="add-more">Add More</div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
