import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';


function UpdateModal(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconButton onClick={handleShow}><EditIcon /></IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="basic-addon2"
              value={props.firstName}
              onChange={props.handleChange}
              name="firstName"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateFirstName}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon2"
              value={props.surName}
              onChange={props.handleChange}
              name="surName"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateLastName}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Date of Birth"
              aria-label="Date of Birth"
              aria-describedby="basic-addon2"
              value={props.dob}
              onChange={props.handleChange}
              name="dob"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateDob}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Age"
              aria-label="Age"
              aria-describedby="basic-addon2"
              value={props.age}
              onChange={props.handleChange}
              name="age"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateAge}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Height"
              aria-label="Height"
              aria-describedby="basic-addon2"
              value={props.height}
              onChange={props.handleChange}
              name={props.height}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateHeight}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Weight"
              aria-label="Weight"
              aria-describedby="basic-addon2"
              value={props.weight}
              onChange={props.handleChange}
              name="weight"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={props.updateWeight}>
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { UpdateModal };
