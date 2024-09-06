import PropTypes from "prop-types";
import "./Hero1.css";

const Hero1 = ({ className = "" }) => {
  return (
    <div className={`hero49 ${className}`}>
      <div className="question3" />
      <div className="county-selection">
        <div className="frame-parent7">
          <div className="icon-number-circle-two-parent">
            <img
              className="icon-number-circle-two1"
              loading="lazy"
              alt=""
              src="/-icon-number-circle-two1.svg"
            />
            <div className="usage-per-day-wh-parent">
              <a className="usage-per-day1">Usage per day (Wh):</a>
              <div className="slice-container">
                <div className="frame-child2" />
              </div>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="rectangle-parent1">
              <div className="selection-input-child" />
              <i className="enter-value3">Enter Value</i>
            </div>
          </div>
          <div className="not-sure-click-here-to-calcul-wrapper">
            <i className="not-sure-click-container1">
              {`Not sure? `}
              <span className="click-here-to1">
                Click here to calculate usage
              </span>
            </i>
          </div>
        </div>
        <div className="icon-number-circle-three-parent">
          <img
            className="icon-number-circle-two1"
            loading="lazy"
            alt=""
            src="/-icon-number-circle-three1.svg"
          />
          <div className="frame-wrapper4">
            <div className="frame-parent8">
              <div className="county-wrapper">
                <a className="county1">County:</a>
              </div>
              <div className="selection-input-parent">
                <div className="selection-input">
                  <div className="selection-input-child" />
                  <i className="enter-value3">Select county</i>
                </div>
                <div className="iconchevron-down-group">
                  <img className="iconchevron-down2" alt="" />
                  <img className="arrow-icon2" alt="" src="/arrow1@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vector-group">
          <img
            className="icon-number-circle-two1"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className="frame-wrapper5">
            <div className="frame-parent8">
              <div className="slope-container">
                <div className="slope1">Slope (°):</div>
              </div>
              <div className="selection-input-parent">
                <div className="rectangle-parent2">
                  <div className="frame-child4" />
                  <i className="select-angle1">Select angle</i>
                </div>
                <div className="iconchevron-down-container">
                  <img className="iconchevron-down2" alt="" />
                  <img className="arrow-icon3" alt="" src="/arrow-1@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent11">
        <div className="icon-number-circle-five-parent">
          <img
            className="icon-number-circle-five1"
            loading="lazy"
            alt=""
            src="/-icon-number-circle-five1.svg"
          />
          <img
            className="icon-number-circle-five1"
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
        </div>
        <div className="frame-wrapper6">
          <div className="frame-parent12">
            <div className="frame-parent13">
              <div className="frame-wrapper7">
                <div className="frame-parent14">
                  <div className="azimuth-container">
                    <a className="azimuth2">Azimuth (°):</a>
                  </div>
                  <img
                    className="layer-2-icon1"
                    loading="lazy"
                    alt=""
                    src="/layer-21.svg"
                  />
                </div>
              </div>
              <div className="rectangle-parent3">
                <div className="selection-input-child" />
                <i className="enter-value4">Enter Value</i>
              </div>
            </div>
            <div className="calculate-container">
              <a className="calculate2">Calculate:</a>
            </div>
            <div className="frame-wrapper8">
              <div className="rectangle-parent4">
                <div className="frame-child6" />
                <div className="calculate3">calculate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero1.propTypes = {
  className: PropTypes.string,
};

export default Hero1;
