import React from "react";

import { Badge } from 'reactstrap';

const Timer = ({ counter }) => {

    const style = {
        position: "fixed",
        top: "90%",
        left: "90%",
        width: "50px",
        zIndex: "9999",
        height: "20px",
        textAlign: "center",
        fontSize: "16px",
    }

    return (
        <Badge
            style={style}
            color="default"
            pill
        >
            {counter}
        </Badge>)
}

export default Timer;
