import { put, takeLatest, call } from 'redux-saga/effects';
import { DELETE_NOTE_BY_ID, DELETED_NOTE_BY_ID, API_ERROR } from '../../redux/actionTypes';
import ApiService from '../../services/apiService';

export default function* deleteNoteWatcher() {

    yield takeLatest(DELETE_NOTE_BY_ID, deleteNoteHandler);

}

function* deleteNoteHandler(action) {

    try {
        console.log('Before call');

        let res = yield call(ApiService.deleteNote, action.payload);

        console.log(res);

        yield put({ type: DELETED_NOTE_BY_ID, payload: res.data });


    } catch (error) {
        
        console.log(error);
        
        yield put({ type : API_ERROR , payload : error.message});

    }


}