import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import "./VerificationStatus.scss";

const propTypes = {
  /**
   * The User Verification Status
   */
  status: PropTypes.oneOf(["partial", "full"]).isRequired,
  /**
   * The size of the verification status icon
   */
  size: PropTypes.oneOf(["sm", "md"]),
};
const defaultProps = {
  size: "md",
  status: "full",
};

const VerificationStatus = ({ status, size }) => {
  const className = classnames({
    "csms-verification-status": true,
    [`csms-verification-status--${size}`]: true,
  });

  return (
    <span className={className} data-qa-verification-status={status}>
      <Icon name={`profile-verification-${status}`} size={size} />
    </span>
  );
};

VerificationStatus.propTypes = propTypes;
VerificationStatus.defaultProps = defaultProps;

export default VerificationStatus;
