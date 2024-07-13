import React, { useState } from 'react'; 
import { Button, Modal, Form } from 'react-bootstrap';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({
      ...currentNote,
      [name]: value,
    });
  };

  const addNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote({ title: '', content: '' });
    handleClose();
  };

  const editNote = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setCurrentNote(notes[index]);
    handleShow();
  };

  const updateNote = () => {
    const updatedNotes = notes.map((note, index) => (index === currentIndex ? currentNote : note));
    setNotes(updatedNotes);
    setIsEditing(false);
    setCurrentNote({ title: '', content: '' });
    handleClose();
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1>Notes App</h1>
      <Button variant="primary" onClick={handleShow} style={{borderRadius:"25px"}}>
        Add Note
      </Button>
      <div className="mt-3">
        {notes.map((note, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.content}</p>
              <Button variant="secondary" onClick={() => editNote(index)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => deleteNote(index)} className="ml-2">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Note' : 'Add Note'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentNote.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={currentNote.content}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={isEditing ? updateNote : addNote}>
            {isEditing ? 'Update Note' : 'Add Note'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotesApp;
