import React, { useState } from "react";

// import classnames from "classnames";


// reactstrap components
import { Container } from "reactstrap";
// import userEvent from "@testing-library/user-event";

const BackgroundApp = () => {
    const [squares1to6, setSquares1to6] = useState("");
    const [squares7and8, setSquares7and8] = useState("");

    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("register-page");
            document.documentElement.removeEventListener("mousemove", followCursor);
        };
    }, []);
    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
            "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)"
        );
        setSquares7and8(
            "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        );
    };

    const renderSquare = () => {
        const squaresNumber = [1, 2, 3, 4, 5, 6];
        const divSquares = squaresNumber.map(square => (<div
            className={`square square-${square}`}
            id={`square${square}`}
            key={square}
            style={{ transform: squares1to6 }}
        />))
        return divSquares
    }

    return (
        <>
            <Container>
                <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                />
                <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                />
                <div className="register-bg" />
                {renderSquare()}
            </Container>
        </>
    );
};

export default BackgroundApp;