import React, { useState } from 'react'
import styled from "styled-components";


const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('')

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(email === 'kamal@gmail.com'){
            onLogin()
        }
        setEmail('')
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <Label>Username: </Label> <br />
        <Input type='email' placeholder='your email' required value={email} onChange={emailHandler}/> <br />
        <Button>LOGIN</Button>
    </form>
    </>
  )
}

const Label = styled.label`
color: #8e8f96;
font-size: 1rem;
line-height: 1.5rem;
`
const Input = styled.input`
outline: 2px solid transparent;
outline-offset: 2px;
text-indent: 0.5rem;
padding: 0.25rem;
border-bottom: 2px solid #6b7280;
`

const Button = styled.button`
font-size: 1rem;
line-height: 1.5rem;
padding: 0 1rem;
margin-top: 0.5rem;
border: 2px solid #fca5a5;
background-color: #fef2f2;
color: #8e8f96;
text-transform: none;
border-radius: 2rem;

&:hover{
    background-color: #fee2e2;
}
`
export default Login