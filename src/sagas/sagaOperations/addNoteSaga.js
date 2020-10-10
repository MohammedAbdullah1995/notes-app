import { put, takeLatest, call } from 'redux-saga/effects';
import { ADD_NOTE, NOTE_ADDED, API_ERROR } from '../../redux/actionTypes';
import ApiService from '../../services/apiService';

export default function* addNoteWatcher() {

    yield takeLatest(ADD_NOTE, addNoteHandler);

}

function* addNoteHandler(action) {

    try {

        let res = yield call(ApiService.addANote, action.payload);

        yield put({ type: NOTE_ADDED, payload: res.data });

    } catch (error) {

        yield put({ type : API_ERROR, payload : error.message });

    }


}


