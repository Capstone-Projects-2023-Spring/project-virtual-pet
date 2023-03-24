import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

function PetProfPage() {
  const axiosPrivate = useAxiosPrivate();

  const [petName, setPetName] = useState('');
  const [flavourText, setFlavourText] = useState('');

  useEffect(() => {
    axiosPrivate.get('/avatar/').then((response) => {
      setPetName(response.data[0].pet_name);
      setFlavourText(response.data[0].flavour_text);
    });
  }, []);

  const handlePetNameChange = (event) => {
    setPetName(event.target.value);
  };

  const handleFlavourTextChange = (event) => {
    setFlavourText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'pet_name': petName,
      'flavour_text': flavourText,
    };
    axiosPrivate.get('/avatar/').then((response) => {
      const avatar_id = response.data[0].avatar_id;
      const url = '/avatar/' + avatar_id + "/";

      axiosPrivate.patch(url, data).then((response) => {
        console.log("response.data:", response.data);
      }).catch((err) => {
        console.log(err);
      });

    }).catch((err) => {
      console.log(err);
    });
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Form onSubmit={handleSubmit} style={{ maxWidth: '700px', width: '100%', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
    <div className="text-center mt-3 mb-4">
      <h1 className="h2 mb-0">Pet Profile</h1>
    </div>
    <Form.Group className="mb-2">
      <Form.Label className="col-sm-2 col-form-label">Pet Name:</Form.Label>
      <Col sm={4}>
        <Form.Control type="text" value={petName} onChange={handlePetNameChange} />
      </Col>
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label className="col-sm-2 col-form-label">Flavour Text:</Form.Label>
      <Col sm={8}>
        <Form.Control as="textarea" rows={3} value={flavourText} onChange={handleFlavourTextChange} />
      </Col>
    </Form.Group>
    <Button type="submit" style={{ marginTop: '20px', marginBottom: '20px' }}>Submit</Button>
  </Form>
  </div>
  

  );
}

export default PetProfPage;
