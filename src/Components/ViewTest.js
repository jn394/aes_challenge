import React from 'react';
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Question from '../Components/Question';

const ViewTest = (props) => {
    const role = useSelector(state => state.initialReducer.role, () => { });

    return (
        <Container>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                <FormControl
                    placeholder="Title"
                    aria-describedby="basic-addon1"
                    value={props.testTitle}
                    onChange={e => props.setTestTitle(e.target.value)}
                    disabled={role === 'SME/ED' ? true : false}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Assignment</InputGroup.Text>
                <FormControl
                    placeholder="Assignment"
                    aria-describedby="basic-addon1"
                    value={props.assignment}
                    onChange={e => props.setAssignment(e.target.value)}
                    disabled={role === 'SME/ED' ? true : false}
                />
            </InputGroup>
            {props.questions.map((question, i) => (
                <Question
                    key={i}
                    index={i}
                    question={question.question}
                    answer={question.answer}
                    feedback={question.feedback}
                    removeQuestion={props.removeQuestion}
                    handleFormOnChange={props.handleFormOnChange}
                />
            ))}
            <div style={{ paddingTop: 10 }}>
                {role === 'ETD' ? <Button onClick={props.addQuestion} text="Call Component" >Add Question</Button> : <></>}
                <Button variant="success" onClick={() => { props.handleSaveTest() }}>Save</Button>
                <Button variant="danger" onClick={() => { props.handleCancel() }}>Cancel</Button>
                {role === 'SME/ED' ? <Button variant="warning" onClick={() => { props.handlePublishTest() }} text="Call Component" >Publish</Button> : <></>}
            </div>
        </Container>
    );
}

export default ViewTest;