import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate'

function AccountPage() {
  const axiosPrivate = useAxiosPrivate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [joinDate, setjoinDate] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    axiosPrivate.get('/user-data/').then((response) => {
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);
      setName(response.data[0].first_name);
      setBio(response.data[0].bio);
      setjoinDate(response.data[0].join_date.substring(0, 10));
      setBirthday(response.data[0].birthday);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlejoinDateChange = (event) => {
    setjoinDate(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'first_name': name,
      'bio': bio,
      'join_date': joinDate,
      'birthday': birthday,
    };
    axiosPrivate.get('/user-data/').then((response) => {
      const id = response.data[0].id;
      const url = '/user-data/' + id + "/";

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
    <Form onSubmit={handleSubmit}>
    <Form.Label>Account Profile</Form.Label>
    <Form.Group>
      <Form.Label>Username:</Form.Label>
      <Form.Control type="text" value={username} disabled />
    </Form.Group>
    <Form.Group>
      <Form.Label>Email:</Form.Label>
      <Form.Control type="email" value={email} disabled />
    </Form.Group>
    <Form.Group>
      <Form.Label>Name:</Form.Label>
      <Form.Control type="text" value={name} onChange={handleNameChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Bio:</Form.Label>
      <Form.Control as="textarea" rows={3} value={bio} onChange={handleBioChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Studying Since:</Form.Label>
      <Form.Control type="date" value={joinDate} onChange={handlejoinDateChange} disabled />
    </Form.Group>
    <Form.Group>
      <Form.Label>Birthday:</Form.Label>
      <Form.Control type="date" value={birthday} onChange={handleBirthdayChange} />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>

  );
}

export default AccountPage;
