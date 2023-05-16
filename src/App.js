import React from 'react';

import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';



function App() {

  const [notes,setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      returnprevNotes.filter((noteItem,index) => {
        return index !== id; 
      });
    });
  }


  return (
    <div className="App">
      {/* Header Section */}
      <Header/>

      {/* Main Section */}
      <CreateArea onAdd = {addNote} />
      {notes.map((noteItem,index) => {
        return(
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default App;


//STEPS:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
