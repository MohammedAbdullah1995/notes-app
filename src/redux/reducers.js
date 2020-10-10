import * as actionTypes from './actionTypes';

const initialState = {

    note_list: [],

    selected_note : {},

    apiLoading: false,

    message: ''

}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_ALL_NOTES:

            return { ...state, apiLoading: true, message: 'Fetching Notes ...' };

        case actionTypes.NOTES_RECIEVED:

            return { ...state, note_list: action.payload, apiLoading: false, message: '' };

        case actionTypes.ADD_NOTE:

            return {...state, apiLoading : true, message: 'Adding your new note ...', selected_note : action.payload};

        case actionTypes.NOTE_ADDED:

            return {...state,apiLoading : false, message: '', selected_note : {}, note_list : [...state.note_list, action.payload]};

        case actionTypes.UPDATE_NOTE_BY_ID:

            return {...state, apiLoading : true, message : 'Editing the specified note ...', selected_note : action.payload };

        case actionTypes.UPDATED_NOTE_BY_ID:

            return {...state, apiLoading : false, message : '', selected_note : {} , note_list : state.note_list.map( note => (note._id === action.payload._id ? {...note, title : action.payload.title, content : action.payload.content}    :   note  )) };

        case actionTypes.DELETE_NOTE_BY_ID:

            return {...state, apiLoading : true, message : 'Deleting note ...', selected_note : action.payload };

        case actionTypes.DELETED_NOTE_BY_ID:

            return {...state, apiLoading : false, message : '', selected_note : {}, note_list : state.note_list.filter(note => note._id !== state.selected_note._id )};

        case actionTypes.API_ERROR:

            return {...state, apiLoading : false, message : action.payload };


        default:

            return state;

    }

}

export default rootReducer;