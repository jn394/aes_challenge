import React, { useState } from 'react';
import { Container, Row, Button, Image, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../actions';
import '../App.css'

const HomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedRole, setSelectedRole] = useState('none');
    const role = useSelector(state => state.initialReducer.role, () => { });

    const handleLogin = () => {
        switch (selectedRole) {
            case 'ETD':
                history.push('/Tests');
                break;
            case 'SME/ED':
                history.push('/Tests');
                break;
            case 'QA':
                history.push('/QA');
                break;
            case 'Customer':
                history.push('/Prod');
                break;
            default:
                console.log('Something went wrong');
        }
        dispatch(setRole(selectedRole));
    }

    return (
        <Container className="vh-100 vw-100 d-flex flex-column" fluid>
            <Row className='h-100 w-100'>
                <div style={{
                    padding: 50, borderWidth: 10, borderRadius: 10,
                    flexDirection: 'row', width: '50%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: '#ffffff',
                    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
                }}>
                    <div style={{
                        display: 'block',
                        margin: 'auto',
                        paddingBottom: 30
                    }}>
                        <Image src="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/Teacher%20Computer%20Online%20Learning.jpg?itok=ocLQkuC4" style={{ marginLeft: 150 }} />
                    </div>
                    <h2>Select a role</h2>
                    <Form.Select aria-label="Default select example" onChange={(e) => setSelectedRole(e.target.value)}>
                        <option>Select a role</option>
                        <option value="ETD">Educational Test Developers (ETD)</option>
                        <option value="SME/ED">Subject Matter Experts (SME) / Editors</option>
                        <option value="QA">QA</option>
                        <option value="Customer">Customer</option>
                    </Form.Select>
                    <Button onClick={() => handleLogin()}>Login</Button>
                </div>
            </Row>
        </Container >
    );
}

export default HomePage;