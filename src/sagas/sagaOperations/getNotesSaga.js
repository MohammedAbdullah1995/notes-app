import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ALL_NOTES, NOTES_RECIEVED, API_ERROR } from '../../redux/actionTypes';
import ApiService from '../../services/apiService';


export default function* getNotesWatcher() {

    yield takeLatest(GET_ALL_NOTES, getNotesHandler);

}

function* getNotesHandler() {

    try {

        let res = yield call(ApiService.fetchAllNotes);

        yield put({ type: NOTES_RECIEVED, payload: res.data });


    }

    catch(error) {

        yield put({ type : API_ERROR, payload : error.message });

    }
}
