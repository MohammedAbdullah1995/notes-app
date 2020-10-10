import { put, takeLatest, call } from 'redux-saga/effects';
import { UPDATE_NOTE_BY_ID, UPDATED_NOTE_BY_ID, API_ERROR } from '../../redux/actionTypes';
import ApiService from '../../services/apiService';

export default function* updateNoteWatcher() {

    yield takeLatest(UPDATE_NOTE_BY_ID, updateNoteHandler);

}


function* updateNoteHandler(action) {

    try {

        let res = yield call(ApiService.updateNote, action.payload);


        yield put({ type: UPDATED_NOTE_BY_ID, payload: res.data });


    } catch (error) {

        yield put({ type: API_ERROR, payload: error.message });

    }

}

