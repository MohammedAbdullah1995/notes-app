import {all} from 'redux-saga/effects';
import getNotesWatcher from './sagaOperations/getNotesSaga';
import addNotesWatcher from './sagaOperations/addNoteSaga';
import updateNoteWatcher from './sagaOperations/updateNoteSaga';
import deleteNoteWatcher from './sagaOperations/deleteNoteSaga';


export default function* rootSaga() {

    yield all([

        getNotesWatcher(),

        addNotesWatcher(),

        updateNoteWatcher(),

        deleteNoteWatcher()

    ]);

}