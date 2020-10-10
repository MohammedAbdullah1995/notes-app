import { GET_ALL_NOTES, ADD_NOTE, GET_NOTE_BY_ID, DELETE_NOTE_BY_ID, UPDATE_NOTE_BY_ID } from './actionTypes';


export const getAllNotes = payload => {

    return { type: GET_ALL_NOTES, payload }

}

export const addNote = payload => {

    return { type: ADD_NOTE, payload }

}

export const getNoteById = payload => {

    return { type: GET_NOTE_BY_ID, payload }

}

export const deleteNoteById = payload => {

    return { type: DELETE_NOTE_BY_ID, payload }

}

export const updateNoteById = payload => {

    return { type: UPDATE_NOTE_BY_ID, payload }

}