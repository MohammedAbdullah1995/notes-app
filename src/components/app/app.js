import React from 'react';
import ConnectedNoteList from '../containers/noteListContainer';
import ConnectedAddNote from '../containers/addNoteContainer';
import './app.scss';



function App() {

  return (
    <div className="container-fluid">

      <ConnectedAddNote></ConnectedAddNote>

      <ConnectedNoteList></ConnectedNoteList>

    </div>

  );
}

export default App;
