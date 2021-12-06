import React, { useState } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTest, saveToProd } from '../actions';
import TestCards from '../Components/TestCards';
import ViewTest_QA_Prod from '../Components/ViewTest_QA_Prod';

const QA_Prod_Page = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const role = useSelector(state => state.initialReducer.role, () => { });
    const currentTest = useSelector(state => state.initialReducer.currentTest, () => { });
    const QATests = useSelector(state => state.initialReducer.QATests, () => { });
    const prodTests = useSelector(state => state.initialReducer.prodTests, () => { });

    const [testTitle, setTestTitle] = useState('');
    const [assignment, setAssignment] = useState('');
    const [questions, setQuestion] = useState([]);

    const handleViewTest = (test) => {
        dispatch(selectCurrentTest(test))
        setTestTitle(test.title);
        setAssignment(test.assignment);
        setQuestion(test.questions);
    }

    const handleProd = () => {
        dispatch(saveToProd(currentTest));
        dispatch(selectCurrentTest({}));
        setTestTitle('');
        setAssignment('');
        setQuestion([]);
    }

    const handleGoBack = () => {
        dispatch(selectCurrentTest({}))
        history.goBack()
    }

    return (
        <Container>
            <Row>
                <Col sm={10}>
                    <h1>Welcome {role}</h1>
                </Col>
                <Col sm={2}><Button onClick={() => { handleGoBack() }}>Back</Button></Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <h3>Available Tests</h3>
                    {role === 'QA' ?
                        QATests.map(test => (
                            <TestCards test={test} handleViewTest={handleViewTest} />
                        )) :
                        prodTests.map(test => (
                            <TestCards test={test} handleViewTest={handleViewTest} />
                        ))}
                </Col>
                <Col sm={8}>
                    <ViewTest_QA_Prod
                        testTitle={testTitle}
                        assignment={assignment}
                        questions={questions}
                        handleProd={handleProd}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default QA_Prod_Page;