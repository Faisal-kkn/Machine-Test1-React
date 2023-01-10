import React from 'react'
import './Header.css'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <Container>
            <Row className='py-3 align-items-center'>
                <Col>
                    <h1 className='logo '>Fanconvo</h1>
                    <p className='fw-200 m-0'>A marketplace for conversations, mentorships and performances.</p>
                </Col>
                <Col md="auto" className='fw-200'>Sign up</Col>
                <Col xs lg="1" className='fw-200'>
                    Login
                </Col>
            </Row>
            <Row className='py-3 align-items-center'>
                <div className="">
                    <label htmlFor="" className='d-inline-block'>Search New Talent</label>
                    <div className='d-inline-block ms-3 rounded-pill w-50 b-main-color'>
                        <InputGroup className="">
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1" className='bg-transparent border-0'
                            />
                            <Button variant="outline-secondary" id="button-addon1 " className='m-0 bg-transparent border-0 text-light '>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="main-color" />
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Header
