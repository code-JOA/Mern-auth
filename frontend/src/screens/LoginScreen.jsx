import { useState } from 'react';
import { Link } from 'react-router-dom';
import { From, Button, Col, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer;'


const LoginScreen = () => {
    const [email, setEmail] = useState() ;
    const [password, setPassword] = useState() ;

    const submitHandler =async (e) => {
        e.preventDefault() ;
        console.log('submit');
    }


  return (
    <FormContainer>
        <h1>Sign In</h1>

        <Form onSubmit={ submitHandler }>

            <Form.Group className='my-2' controlId='email'>

                <Form.Label ></Form.Label>
            </Form.Group>

            </Form>

    </FormContainer>
  )
}

export default LoginScreen