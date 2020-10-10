import React from 'react';
import NoteItem from './note-item/note-item';
import './note-list.scss';
import Accordion from 'react-bootstrap/Accordion';




export default function NoteList({noteList, deleteNote, updateNote}) {

    return (

  

            <Accordion defaultActiveKey="0">
            {
                noteList.map( note => {

                    return(
          
                            <NoteItem key={note._id} note={note} 
                             updateNote={updateNote} deleteNote={deleteNote}></NoteItem>
                
                    ) 
                })
            }
            </Accordion>
            
  



    )

}