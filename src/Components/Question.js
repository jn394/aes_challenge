import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const Question = (props) => {
    const role = useSelector(state => state.initialReducer.role, () => { });

    return (
        <Container>
            <Row style={{ padding: 10 }}>
                <Col sm={3}> <h4>Question {props.index + 1}</h4></Col>
                {role === 'ETD' ? <Col sm={1}><Button variant="danger" onClick={() => props.removeQuestion(props.index)}>X</Button></Col> : <></>}
            </Row>
            <div>
                <InputGroup>
                    <InputGroup.Text>Question</InputGroup.Text>
                    <FormControl as="textarea" placeholder="Write your question here" value={props.question || ''} onChange={(e) => props.handleFormOnChange(e, props.index, 'question')} disabled={role === 'SME/ED' ? true : false} />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Answer</InputGroup.Text>
                    <FormControl as="textarea" placeholder="Write your answer here" value={props.answer || ''} onChange={(e) => props.handleFormOnChange(e, props.index, 'answer')} disabled={role === 'SME/ED' ? true : false} />
                </InputGroup>
                {role === 'SME/ED' ?
                    <InputGroup>
                        <InputGroup.Text>Feed Back</InputGroup.Text>
                        <FormControl as="textarea" placeholder="Write your feedback here" value={props.feedback || ''} onChange={(e) => props.handleFormOnChange(e, props.index, 'feedback')} />
                    </InputGroup>
                    : <></>}
                {role === 'ETD' ? props.feedback ?
                    <h5 style={{ fontStyle: 'italic', color: 'red', padding: 10 }}>FeedBack: "{props.feedback}"</h5>
                    : <></> : <></>}
            </div>
        </Container>
    );
}

export default Question;