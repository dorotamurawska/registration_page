import React, { useState } from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Form,
    FormText,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

const CardsNumberPage = ({ cardsNumber, setCardsNumber, setNickname, setVisibleAlert, counter, setCounter }) => {
    const [fullNameFocus, setFullNameFocus] = useState(false);
    const [hasSuccessCardsNumber, setHasSuccessCardsNumber] = useState("");
    const [disabledBtnFinish, setDisabledBtnFinish] = useState(true);
    const [VisibleWarningParagraph, setVisibleWarningParagraph] = useState(false);

    let history = useHistory();

    const warningParagraph =
        <p style={{
            color: "#dc3545",
            fontSize: "0.75rem"
        }}>
            enter 10 characters, only numbers.
        </p>;

    const handlerInputCardsNumber = (e) => {
        const CARDS_NUMBER_LENGTH = 10;
        const value = e.target.value;
        const characterValidation = (/^[0-9]+$/.test(value));
        const validation = characterValidation && value.length === CARDS_NUMBER_LENGTH;

        if (validation) {
            setDisabledBtnFinish(false);
            setHasSuccessCardsNumber("has-success");
        } else {
            setDisabledBtnFinish(true);
            setHasSuccessCardsNumber("has-danger");
        }

        if (value.length === 0) {
            setHasSuccessCardsNumber("");
        }

        if (validation) {
            setVisibleWarningParagraph(false);
        } else if (value.length === 0) {
            setVisibleWarningParagraph(false);
        } else {
            setVisibleWarningParagraph(true);
        }

        setCardsNumber(e.target.value);
        setCounter(20);
    }

    const handlerBtnFinish = (e) => {
        e.preventDefault();
        setVisibleAlert(true);
        setTimeout(() => {
            window.location.reload();
            window.location.replace(`${document.location.origin}/`)
        }, 1500);
    }

    const handlerBtnBack = () => {
        history.push("/");
        setNickname("");
        setCounter(20);
    }
    if (counter === 0) {
        history.push("/");
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="6" md="8">
                        <Card className="card-register">
                            <CardHeader>
                                <CardImg
                                    alt="square"
                                    src={require("../assets/img/square-purple-1.png").default}
                                />
                                <CardTitle tag="h4">card</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form className="form">
                                    <InputGroup
                                        className={classnames({
                                            "input-group-focus": fullNameFocus,
                                        })}
                                    >
                                        <InputGroupAddon
                                            addonType="prepend"
                                            className={hasSuccessCardsNumber}>
                                            <InputGroupText>
                                                <i className="tim-icons icon-credit-card" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Type your card’s number"
                                            id="cardsNumber"
                                            type="text"
                                            value={cardsNumber}
                                            maxLength="10"
                                            minLength="10"
                                            autoComplete="off"
                                            onChange={handlerInputCardsNumber}
                                            onFocus={(e) => setFullNameFocus(true)}
                                            onBlur={(e) => setFullNameFocus(false)}
                                        />
                                    </InputGroup>
                                    <FormText color="muted">
                                        {VisibleWarningParagraph ? warningParagraph : null}
                                    </FormText>
                                    <Button className="btn-round mt-4" color="primary"
                                        size="lg"
                                        type="submit"
                                        onClick={handlerBtnFinish}
                                        disabled={disabledBtnFinish}>
                                        Finish
                                    </Button>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    className="btn-round"
                                    size="sm"
                                    onClick={handlerBtnBack}
                                >Back</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CardsNumberPage;