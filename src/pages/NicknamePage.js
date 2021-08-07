import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
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
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

const NicknamePage = ({ nickname, setNickname, setCardsNumber, setCounter }) => {
    const [fullNameFocus, setFullNameFocus] = useState(false);
    const [disabledBtnNext, setDisabledBtnNext] = useState(true);
    const [hasSuccessNickname, setHasSuccessNickname] = useState("");
    const [VisibleWarningParagraph, setVisibleWarningParagraph] = useState(false);
    let history = useHistory();


    const warningParagraph =
        <p style={{
            color: "#dc3545",
            fontSize: "0.75rem"
        }}>
            You can only use: letters, numbers, -, _.
        </p>;

    const handlerInputNickname = (e) => {
        const MAX_LENGTH = 20;
        const MIN_LENGTH = 3;
        const value = e.target.value;
        const characterValidation = value && (/^[\w-]+$/.test(value));
        const validation = characterValidation && value.length >= MIN_LENGTH && value.length <= MAX_LENGTH;

        setCounter(20);

        if (validation) {
            setDisabledBtnNext(false);
            setHasSuccessNickname("has-success");
        } else {
            setDisabledBtnNext(true);
            setHasSuccessNickname("has-danger");
        }

        if (value.length < 3) {
            setHasSuccessNickname("");
        }

        if (characterValidation || value.length === 0) {
            setVisibleWarningParagraph(false);
        } else {
            setVisibleWarningParagraph(true);
        }

        setNickname(value);
    }

    const handlerBtnNext = (e) => {
        e.preventDefault();
        history.push("/cards-number");
        setCardsNumber("");
        setCounter(20);
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
                                <CardTitle tag="h4" className='nickname-title'>Nickname</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form className="form">
                                    <InputGroup
                                        className={classnames({
                                            "input-group-focus": fullNameFocus,
                                        })}
                                    >
                                        <InputGroupAddon addonType="prepend" className={hasSuccessNickname}>
                                            <InputGroupText>
                                                <i className="tim-icons icon-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Type your nickname"
                                            id="nickname"
                                            type="text"
                                            value={nickname}
                                            maxLength="20"
                                            autoComplete="off"
                                            onChange={handlerInputNickname}
                                            onFocus={(e) => {
                                                setFullNameFocus(true)
                                            }}
                                            onBlur={(e) => {
                                                setFullNameFocus(false)
                                            }}
                                        />
                                    </InputGroup>
                                    {VisibleWarningParagraph ? warningParagraph : null}
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    size="lg"
                                    onClick={handlerBtnNext}
                                    disabled={disabledBtnNext}
                                >Next
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NicknamePage;