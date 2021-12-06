import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const TestCards = (props) => {
    return (
        <Card onClick={() => props.handleViewTest(props.test)} style={{ cursor: 'pointer' }}>
            <Card.Body>
                <Card.Title>{props.test.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.test.assignment}</Card.Subtitle>
                <Card.Text>
                    Questions: {props.test.questions.length}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TestCards;