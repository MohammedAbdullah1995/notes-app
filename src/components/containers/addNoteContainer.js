import {connect} from 'react-redux';
import AddNote from '../add-note/add-note';
import {addNote} from '../../redux/actions';

const mapDispatchToProps = {addNote};

const ConnectedAddNote = connect(null,mapDispatchToProps)(AddNote);

export default ConnectedAddNote;