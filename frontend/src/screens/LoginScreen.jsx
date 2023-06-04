import { useState } from 'react';
import { Link } from 'react-router-dom';
import { From, Button, Col, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer;'


const LoginScreen = () => {
    const [email, setEmail] = useState() ;
    const [password, setPassword] = useState() ;

    const submitHandler =async (e) => {
        e.preventDefault() ;
    }


  return (
    <div>LoginScreen</div>
  )
}

export default LoginScreen