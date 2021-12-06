import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, InputGroup, FormControl, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const ViewTest_QA_Prod = (props) => {
    const role = useSelector(state => state.initialReducer.role, () => { });
    const currentTest = useSelector(state => state.initialReducer.currentTest, () => { });

    return (
        <Container>
            <h5>Title: {props.testTitle}</h5>
            <h5>Assignment: {props.assignment}</h5>
            {props.questions.map((question, i) => (
                <Card key={i}>
                    <Card.Body>
                        <Card.Title>Question: {question.question}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Answer: {question.answer}</Card.Subtitle>
                        {role === 'QA' ? <Card.Text>FeedBack: {question.feedback}</Card.Text> : <></>}
                    </Card.Body>
                </Card>
            ))}
            <div style={{ paddingTop: 5 }}>
                {role === 'QA' ? Object.keys(currentTest).length > 0 ? <Button variant="success" onClick={() => { props.handleProd() }}>Save to Prod</Button> : <></> : <></>}
            </div>
        </Container>
    );
}

export default ViewTest_QA_Prod;