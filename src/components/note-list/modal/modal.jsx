import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function DeleteModal({ show, handleModalClose, deleteNote, note}) {

    let handleDeleteNote = note =>{

        handleModalClose();

        deleteNote(note)

    }


    return (

        <>
            <Modal show={show} onHide={handleModalClose}>

                <Modal.Header>

                    <Modal.Title>Hey, wait a sec...</Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    Are you sure you want to delete this note?

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleModalClose}> Cancel </Button>

                    <Button variant="primary" onClick={()=>handleDeleteNote(note)}> Delete the note</Button>

                </Modal.Footer>



            </Modal>
        </>

    )


}