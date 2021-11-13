import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import BrickImage from "./BrickImage";
import BrickIcon from "./BrickIcon";
import BrickAvatar from "./BrickAvatar";
import BrickOverlay from "./BrickOverlay";
import BrickBadge from "./BrickBadge";

const propTypes = {
  /**
   * The shape of the brick
   */
  shape: PropTypes.oneOf(["circle", "squared"]),
  /**
   * The size of the brick
   * @notice the 'xsm' slot is left available on purpose, in case of future need.
   */
  size: PropTypes.oneOf(["stretch", "xxsm", "sm", "md", "lg", "xlg"]),
  /**
   * The image object, used to show an image inside the brick - Passed down directly to BrickImage
   * @see BrickImage
   */
  image: PropTypes.object,
  /**
   * The icon object, used to show an icon inside the brick - Passed down directly to BrickIcon
   * @see BrickImage
   */
  icon: PropTypes.object,
  /**
   * The user object, used to show an avatar inside the brick - Passed down directly to BrickAvatar
   * @see BrickAvatar
   */
  user: PropTypes.object,
  /**
   * The overlay object, used to show an overlay content on top of the brick - Passed down directly to BrickOverlay
   * @see BrickOverlay
   */
  overlay: PropTypes.object,
  /**
   * The badge object, used to show a icon or a mark in one of the predefined positions (bottom-left, bottom-right) - Passed down directly to BrickBadge
   * @see BrickBadge
   */
  badge: PropTypes.object,
  /**
   * onClick handler attached to the brick element
   * @notice control of event propagation is delegated to the developer
   */
  onClick: PropTypes.func,
  /**
   * onClick handler attached to the media (avatar|icon|image) element
   * @notice control of event propagation is delegated to the developer
   */
  onClickMedia: PropTypes.func,
  /**
   * onClick handler attached to the badge element
   * @notice control of event propagation is delegated to the developer
   */
  onClickBadge: PropTypes.func,
};

const defaultProps = {
  shape: "circle",
  size: "stretch",
};

const Brick = ({
  shape,
  size,
  image,
  icon,
  user,
  overlay,
  badge,
  onClick,
  onclickMedia,
  onClickBadge,
}) => {
  const className = classnames({
    "csms-brick": true,
    [`csms-brick--${shape}`]: true,
    [`csms-brick--${size}`]: true,
  });

  return (
    <div className={className} data-qa="brick" onClick={onClick}>
      {image && <BrickImage image={image} onClick={onclickMedia} />}
      {icon && <BrickIcon icon={icon} onClick={onclickMedia} />}
      {user && <BrickAvatar user={user} onClick={onclickMedia} />}
      {overlay && (
        <BrickOverlay background={overlay.background}>
          {overlay.children}
        </BrickOverlay>
      )}
      {badge && (
        <BrickBadge
          position={badge.position}
          icon={badge.icon}
          mark={badge.mark}
          onClick={onClickBadge}
        />
      )}
    </div>
  );
};

Brick.propTypes = propTypes;
Brick.defaultProps = defaultProps;

export default Brick;
