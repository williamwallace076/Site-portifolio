import PropTypes from "prop-types";
import useInView from "./useInView";

const RevealOnScroll = ({ children, delay = 0, threshold = 0.22, rootMargin = "0px 0px -14% 0px" }) => {
  const [elementRef, isVisible] = useInView({ threshold, rootMargin });

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll${isVisible ? " is-visible" : ""}`}
      style={{ "--reveal-delay": `${isVisible ? delay : 0}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;

RevealOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
};
