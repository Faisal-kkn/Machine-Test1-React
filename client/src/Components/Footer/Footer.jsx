import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import './Footer.css'
function Footer() {
  return (
      <Container className='pb-3'>
          <Row className='py-3 align-items-center'>
              <Col xs={6}>
                  <h2 className='footer-logo '>Fanconvo</h2>
              </Col>
              <Col><p className='fw-200 text-gray fs-small text-end m-0'>How Fanconvo Work?</p></Col>
              <Col><p className='fw-200 text-gray fs-small text-end m-0'>Terms of Use</p></Col>
              <Col><p className='fw-200 text-gray fs-small text-end m-0'>Contact Us</p></Col>
          </Row>
          <Row>
              <p className='fw-200 m-0 text-center fs-small m-0 text-gray'>&#169; 2023 Fanconvo</p>
          </Row>
    </Container>
  )
}

export default Footer
