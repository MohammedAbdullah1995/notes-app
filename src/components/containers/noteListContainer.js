import {connect} from 'react-redux';
import NoteList from '../note-list/note-list';
import {updateNoteById,deleteNoteById} from '../../redux/actions';

const mapStateToProps = state =>{

    return {noteList : state.note_list};

}

const mapDispatchToProps = dispatch =>({

    updateNote : (note) => dispatch(updateNoteById(note)),

    deleteNote : (note) => dispatch(deleteNoteById(note))


})

const ConnectedNoteList = connect(mapStateToProps,mapDispatchToProps)(NoteList);

export default ConnectedNoteList;