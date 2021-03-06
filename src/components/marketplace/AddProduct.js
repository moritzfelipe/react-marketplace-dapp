/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel, Card , Alert} from "react-bootstrap";

const AddProduct = ({ save }) => {
  // do we really need to use state for every single input?
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const isFormFilled = ()=> name && image && description && location && price

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
      <Button onClick={handleShow}  variant="dark" className="rounded-pill px-0" style={{width:"38px"}}>
        <i class="bi bi-plus"></i>
      </Button>
      
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="inputName"
              label="Product name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Product name"
              />
            </FloatingLabel>

            <FloatingLabel controlId="inputUrl" label="Image URL" className="mb-3">
              <Form.Control type="text" placeholder="Image URL" 
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel controlId="inputDescription" label="Description" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="description"
                style={{ height: '80px' }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel controlId="inputLocation" label="Location" className="mb-3">
              <Form.Control type="text" placeholder="Location" 
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel controlId="inputPrice" label="Price" className="mb-3">
              <Form.Control type="text" placeholder="Price" 
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </FloatingLabel>
            

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                name,
                image,
                description,
                location,
                price,
              });
              handleClose();
            }}
          >
           Save product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddProduct.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddProduct;
