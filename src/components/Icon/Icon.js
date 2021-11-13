import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Check, X, CheckCircle } from "phosphor-react";

import "./Icon.scss";

const propTypes = {
  /**
   * The name/slug of the icon to show
   */
  name: PropTypes.string.isRequired,
};

const convertSizeLabelToPhosporSize = (label) => {
  const map = {
    sm: 24,
    md: 32,
  };
  return map[label];
};
const Icon = ({ name, size }) => {
  const className = classnames({
    "csms-icon": true,
    [`csms-icon--${name}`]: true,
  });

  const _iconProps = {
    weight: null, // fill | duotone | light | regular | thin
    size: convertSizeLabelToPhosporSize(size),
  };

  return (
    <span className={className}>
      {name === "profile-verification-full" && (
        <CheckCircle {..._iconProps} weight="fill" />
      )}
      {name === "profile-verification-partial" && (
        <CheckCircle {..._iconProps} />
      )}
    </span>
  );
};

Icon.propTypes = propTypes;

export default Icon;
