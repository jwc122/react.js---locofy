import PropTypes from "prop-types";
import "./Hero2.css";

const Hero2 = ({ className = "" }) => {
  return (
    <div className={`hero42 ${className}`}>
      <div className="question2" />
      <img
        className="image-155-icon1"
        loading="lazy"
        alt=""
        src="/image-1551@2x.png"
      />
      <img
        className="image-156-icon1"
        loading="lazy"
        alt=""
        src="/image-1561@2x.png"
      />
      <div className="frame-parent3">
        <div className="frame-parent4">
          <div className="frame-wrapper1">
            <div className="frame-parent5">
              <div className="icon-number-circle-one-wrapper">
                <img
                  className="icon-number-circle-one1"
                  loading="lazy"
                  alt=""
                  src="/-icon-number-circle-one1.svg"
                />
              </div>
              <div className="frame-parent6">
                <div className="frame-wrapper2">
                  <div className="system-parent">
                    <div className="system2">System:</div>
                    <div className="daily-usage-wrapper">
                      <div className="daily-usage" />
                    </div>
                  </div>
                </div>
                <div className="system-two">
                  <a className="system3">System</a>
                  <div className="battery-select1">
                    <div className="solarw1">Solar(W)</div>
                    <div className="batterywh1">Battery(Wh)</div>
                    <a className="select1">Select:</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero43">
            <div className="div10">3000</div>
            <div className="wrapper">
              <a className="a">5000</a>
            </div>
            <div className="hero44" />
          </div>
        </div>
        <div className="hero45">
          <div className="empty-symbol-wrapper">
            <div className="empty-symbol">3500</div>
          </div>
          <input className="hero-child" placeholder="5120" type="text" />
          <div className="hero46" />
        </div>
        <div className="hero-parent2">
          <div className="hero47">
            <div className="div11">3500</div>
            <div className="div12">5120</div>
            <div className="hero48" />
          </div>
          <img
            className="image-157-icon1"
            loading="lazy"
            alt=""
            src="/image-1571@2x.png"
          />
        </div>
      </div>
      <div className="hero-inner1">
        <div className="shopping-group">
          <img
            className="shopping-icon1"
            loading="lazy"
            alt=""
            src="/shopping1.svg"
          />
          <div className="frame-child1" />
          <div className="add-more1">Add More</div>
          <div className="vector-wrapper">
            <img
              className="vector-icon3"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  className: PropTypes.string,
};

export default Hero2;
