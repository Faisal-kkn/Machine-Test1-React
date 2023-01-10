import React, { useState } from 'react'
import './Home.css'
import { Container, Row, Tab, Col, Nav, Button, Form } from 'react-bootstrap';
import Input from '../../Components/Input/Input';
import { useForm } from "react-hook-form";
import axios from 'axios'

function Home() {
    const [fanSignData, setFanSignData] = useState({ fanfirstname: '', fanlastname: '', fanusername: '', fanemail: '', fantimezone: '', fanpassword: '', fanterms: '' });
    const [talentSignData, setTalentSignData] = useState({ firstname: '', lastname: '', username: '', email: '', timezone: '', password: '', terms: '' });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formSubmit = () => {
        axios
            .post("http://localhost:5000/fanSign", { ...fanSignData })
            .then((response) => {
                console.log(response);
            });
    }

    const talentSign = [
        { name: "firstname", label: "First name", type: "text", value: talentSignData.firstname },
        { name: "lastname", label: "Last name", type: "text", value: talentSignData.lastname },
        { name: "username", label: "Username", type: "text", value: talentSignData.username },
        { name: "email", label: "Email", type: "email", value: talentSignData.email },
        { name: "timezone", label: "Timezone", type: "datetime-local", value: talentSignData.timezone },
        { name: "password", label: "Password", type: "password", value: talentSignData.password },
        { name: "terms", label: "I agree to the ", type: "checkbox", value: talentSignData.terms },
    ]

    const fanSign = [
        { name: "fanfirstname", label: "First name", type: "text", value: fanSignData.fanfirstname, condition: { required: true, pattern: /^[A-Za-z]+$/i, minLength: 3 }, err: errors.fanfirstname, errMsg: 'Please check your firstname' },
        { name: "fanlastname", label: "Last name", type: "text", value: fanSignData.fanlastname, condition: { required: true, pattern: /^[A-Za-z]+$/i, minLength: 3 }, err: errors.fanlastname, errMsg: 'Please check your lastname' },
        { name: "fanusername", label: "Username", type: "text", value: fanSignData.fanusername, condition: { required: true, pattern: /^@?(\w){1,15}$/, minLength: 3 }, err: errors.fanusername, errMsg: 'Please check your username' },
        { name: "fanemail", label: "Email", type: "email", value: fanSignData.fanemail, condition: { required: true, pattern: /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/ }, err: errors.fanemail, errMsg: 'Please check your email' },
        { name: "fantimezone", label: "Timezone", type: "datetime-local", value: fanSignData.fantimezone, condition: { required: true, pattern: /^[A-Za-z]+$/i }, err: errors.fantimezone, errMsg: 'Please check your timezone' },
        { name: "fanpassword", label: "Password", type: "password", value: fanSignData.fanpassword, condition: { required: true, minLength: 6 }, err: errors.fanpassword, errMsg: 'Please check your password' },
        { name: "fanterms", label: "I agree to the ", type: "checkbox", value: fanSignData.fanterms, condition: { required: true }, err: errors.fanterms, errMsg: 'Please check the terms' },
    ]


    return (
        <Container>
            <Row>
                <div className=' mx-auto my-5 sub-box'>
                    <div className=" mx-auto">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className=''>
                                <Col sm={12}>
                                    <Nav variant="pills" className="tab-btn rounded-pill mx-auto w-fit">
                                        <Nav.Item className='m-1'>
                                            <Nav.Link eventKey="first" className='text-light rounded-pill'>FAN SIGNUP</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='m-1'>
                                            <Nav.Link eventKey="second" className='text-light rounded-pill'>TALENT SIGNUP</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h2 className='fw-200 py-4 text-center'> Create Your Fan Account</h2>
                                            <form onSubmit={handleSubmit(formSubmit)}>

                                                {
                                                    fanSign.map((item, index) => {
                                                        return (
                                                            <Input item={item} key={index} action={setFanSignData} register={register} data={fanSignData} errors={errors} />
                                                        )
                                                    })
                                                }
                                                <div className='mx-auto w-fit text-center'>
                                                    <Button className='rounded-pill px-5 py-2 fw-400  main-bg border-0 text-dark' type='submit'>SIGN UP</Button>
                                                    <p className='fs-small fw-200  pt-2 m-0'>Already have an account? <span className='main-color'>Log in</span></p>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h2 className='fw-200 py-4 text-center'> Create Your Talent Account</h2>
                                            <form >
                                                {
                                                    talentSign.map((item, index) => {
                                                        return (
                                                            <Input item={item} key={index} action={setTalentSignData} register={register} data={talentSignData} />
                                                        )
                                                    })
                                                }
                                                <div className='mx-auto w-fit text-center'>
                                                    <Button className='rounded-pill px-5 py-2 fw-400  main-bg border-0 text-dark'>SIGN UP</Button>
                                                    <p className='fs-small fw-200  pt-2 m-0'>Already have an account? <a className='main-color'>Log in</a></p>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Home
