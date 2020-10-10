import React, { useState, useEffect } from 'react';
import './note-item.scss';
import Card from 'react-bootstrap/Card';
import editIcon from '../../../globalStyles/images/edit.png';
import deleteIcon from '../../../globalStyles/images/delete.png';
import Collapse from 'react-bootstrap/Collapse';
import DeleteModal from '../modal/modal';



export default function NoteItem({ note, updateNote, deleteNote }) {

    const [editNote, setEditNote] = useState(false);

    const [openNote, setOpenNote] = useState(false);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    let titleField = React.createRef();

    let contentField = React.createRef();

    let handleNoteSave = () => {

        var noteToBeUpdated = { ...note, title: titleField.current.value, content: contentField.current.value }

        updateNote(noteToBeUpdated);

        setEditNote(false);

    }

    useEffect(() => { if (editNote) { setOpenNote(true) } }, [openNote, editNote]);
    useEffect(() => { if(openDeleteModal){ setOpenNote(true) } }, [openDeleteModal]);


    let noteItem =
        <>
            <Card>

                <Card.Header className="title p-2 d-flex" onClick={() => setOpenNote(!openNote)}>



                    {!editNote ? note.title : <input type="text" defaultValue={note.title} ref={titleField} />}

                    <div className="ml-auto">

                        <img src={editIcon} onClick={() => setEditNote(true)} alt="" height="10px" />

                        <img src={deleteIcon} onClick={() => setOpenDeleteModal(true)} height="10px" alt="" />

                    </div>



                </Card.Header>

                <Collapse in={openNote}>

                    <div className="content"> {!editNote ? note.content :

                        (<span><textarea className="m-3" cols="40" type="text" defaultValue={note.content} ref={contentField} ></textarea>

                            <span className="button-container">  <button onClick={() => handleNoteSave()}> save</button> <button onClick={() => setEditNote(false)}> cancel </button></span>

                        </span>)}</div>

                </Collapse>

            </Card>

            <DeleteModal show = {openDeleteModal} handleModalClose={() => setOpenDeleteModal(false)}
             deleteNote={deleteNote} note={note}></DeleteModal>
        </>

    return noteItem;

}