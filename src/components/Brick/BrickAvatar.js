import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";

const propTypes = {
  /**
   * The user object - Passed down directly to Avatar
   * @see Avatar
   */
  user: PropTypes.object,
  /**
   * onClick handler attached to the brick avatar element
   * @notice control of event propagation is delegated to the developer
   */
  onClick: PropTypes.func,
};

const BrickAvatar = ({ user, onClick }) => {
  return (
    <div className={"csms-brick__avatar"} onClick={onClick}>
      <Avatar user={user} />
    </div>
  );
};

BrickAvatar.propTypes = propTypes;

export default BrickAvatar;
