import React from "react";
import PropTypes from "prop-types";

const Avatar = props => {
    return (
        <div className={props.align}>
            <img
                src={props.avatarURL}
                alt={`Avatar of user ${props.user}`}
                className="avatar"
            />
            <p className="center">{props.user}</p>
        </div>
    );
};

Avatar.propTypes = {
    user: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
};

export default Avatar;
