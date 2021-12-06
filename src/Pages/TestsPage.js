import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveTest, selectCurrentTest, publishTest } from '../actions';
import TestCards from '../Components/TestCards';
import ViewTest from '../Components/ViewTest';
import uuid from 'react-uuid'

const TestsPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [createATest, setCreateATest] = useState(false);
    const role = useSelector(state => state.initialReducer.role, () => { });
    const currentTest = useSelector(state => state.initialReducer.currentTest, () => { });
    const savedTests = useSelector(state => state.initialReducer.savedTests, () => { });

    const [testTitle, setTestTitle] = useState('');
    const [assignment, setAssignment] = useState('');
    const [questions, setQuestion] = useState([]);

    const handleCreateTest = () => {
        setCreateATest(!createATest);
    }

    const addQuestion = () => {
        let questionObj = {
            question: '',
            answer: '',
            feedback: ''
        }
        setQuestion([...questions, questionObj])
    }

    const removeQuestion = (index) => {
        let vals = [...questions];
        vals.splice(index, 1);
        setQuestion(vals);
    }

    const handleFormOnChange = (event, index, type) => {
        let vals = [...questions];
        vals[index][type] = event.target.value;
        setQuestion(vals)
    }

    const handleSaveTest = () => {
        let testObj = {
            id: currentTest.id ? currentTest.id : uuid(),
            title: testTitle,
            assignment: assignment,
            questions: questions
        }

        dispatch(saveTest(testObj));
        handleCancel();
    }

    const handleViewTest = (test) => {
        console.log('test', test);
        dispatch(selectCurrentTest(test))
        setCreateATest(false)
        setTestTitle(test.title);
        setAssignment(test.assignment);
        setQuestion(test.questions);
        setCreateATest(true)
    }

    const handleCancel = () => {
        dispatch(selectCurrentTest({}))
        setTestTitle('');
        setAssignment('');
        setQuestion([]);
        setCreateATest(false)
    }

    const handlePublishTest = () => {
        dispatch(publishTest(currentTest))
        handleCancel();
    }

    const handleGoBack = () => {
        handleCancel();
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
                    {savedTests.map(test => (
                        <TestCards test={test} handleViewTest={handleViewTest} />
                    ))}
                </Col>
                <Col sm={8}>
                    {role === 'ETD' ? createATest ? <></> : <Button onClick={() => handleCreateTest()}>Create a Test</Button> : <></>}
                    {createATest ?
                        <ViewTest
                            testTitle={testTitle}
                            setTestTitle={setTestTitle}
                            assignment={assignment}
                            setAssignment={setAssignment}
                            questions={questions}
                            removeQuestion={removeQuestion}
                            handleFormOnChange={handleFormOnChange}
                            addQuestion={addQuestion}
                            handleSaveTest={handleSaveTest}
                            setCreateATest={setCreateATest}
                            handleCancel={handleCancel}
                            handlePublishTest={handlePublishTest}
                        />
                        : <></>}
                </Col>
            </Row>
        </Container>
    );
}

export default TestsPage;