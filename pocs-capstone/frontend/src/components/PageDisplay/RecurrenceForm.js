import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TaskListContext from '../../context/TaskListContext'
import { useContext, useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import * as yup from "yup";
import * as formik from 'formik'


function RecurrenceForm({ showRecurr, handleCloseR, values}) {
    const handlers = useContext(TaskListContext);

    // const { Formik } = formik;
    // const schema = yup.object().shape({
    //     title: yup.string().required(),
    //     description: yup.string().required(),
    //     size: yup.string().required(),
    //     level: yup.string().required(),
    //     due_date: yup.string().required(),
    //     recurrence: yup.string().required(),

    // });

    return (
        <Modal
            show={showRecurr}
            onHide={() => {
                handleCloseR()
                values.recurrence = 'never'
            }}>
            <Modal.Header closeButton>
                <Modal.Title>CUSTOM RECURRENCE</Modal.Title>
            </Modal.Header>

        </Modal>




    );
}


export default RecurrenceForm






