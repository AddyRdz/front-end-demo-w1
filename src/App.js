import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

/*use the docs!
https://getbootstrap.com/docs/5.2/getting-started/introduction/
https://react-bootstrap.github.io/layout/stack/

margin/padding:
me-3 - end with margin of 3
ms - start
mt - top
mb - bottom
*/

function App() {
  return (
    <Container>
      <h1>hello, world</h1>

      <Stack gap={3} className='mb-4'>
        <div className='bg-light border border-success me-3'>First Item</div>
        <div className='bg-info border border-info ms-4'>Second Item</div>
        <div className='bg-light border border-danger'>Third Item</div>
      </Stack>

      <Stack gap={5} direction="horizontal">
        <div className='bg-light border'>First Item</div>
        <div className='bg-light border'>Second Item</div>
        <div className='bg-light border'>Third Item</div>
      </Stack>

      <Container className='bg-success mb-4'>
        <Row className='mb-4'>
          <Col className='bg-info border p-3'>1 of 2</Col>
          <Col className='bg-info border p-3'>2 of 2</Col>
        </Row>
      <Row className='mb-4'>
        <Col className='bg-primary border p-4'>1 of 3</Col>
        <Col className='bg-warning border p-4'>2 of 3</Col>
        <Col className='bg-danger border p-4'>3 of 3</Col>
      </Row>
      </Container>

      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="p-2 bg-info">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>

    </Container>
  );
}

export { App };
