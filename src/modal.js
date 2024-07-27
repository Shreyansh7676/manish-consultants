import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notice!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We have sent you a verification Email! Please check your Inbox</Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter OTP"
          className="mb-3 outline-none flex gap-10 left-6"
          style={{height:'20%'}}
        >
          <Form.Control type="email" placeholder="name@example.com" style={{width:'50%'}} />
          <Button style={{ backgroundColor: "green", width:'30%' }} onClick={handleClose}>
            Verify
          </Button>
        </FloatingLabel>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red"}} onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;