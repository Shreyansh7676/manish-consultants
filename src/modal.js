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
      <Button className="w-[100%] bg-black h-[40px] my-3 flex items-center justify-center  rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={handleShow}>
        Send OTP
      </Button>

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