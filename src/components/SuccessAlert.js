import React from "react";

import { Alert } from "reactstrap";

const SuccessAlert = ({ visibleAlert, setVisibleAlert }) => {

    const style = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "999",
    }

    const onDismiss = () => {
        setVisibleAlert(false);
    }
    return (<Alert
        color="success"
        isOpen={visibleAlert}
        toggle={onDismiss}
        style={style}
    >You have registered successfully!</Alert>);
}

export default SuccessAlert;