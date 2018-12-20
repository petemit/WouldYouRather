import React from "react";
import PropTypes from "prop-types";

const Stat = props => {
    return (
        <table className="stat_table">
            <tbody>
                <tr>
                    <th
                        style={{
                            width: "100px"
                        }}
                    >
                        <h5>{props.text}</h5>
                    </th>
                    <th>
                        <h4>{props.number}</h4>
                    </th>
                </tr>
            </tbody>
        </table>
    );
};

Stat.propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};

export default Stat;
