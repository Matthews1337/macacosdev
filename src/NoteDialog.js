import React, { useState, useEffect } from 'react';
import './styles/notedialog.css';

const NoteDialog = ({ day, editIndex, initialText, onClose, onSubmit, onDelete }) => {
    const [text, setText] = useState(initialText);

    useEffect(() => {
        setText(initialText);
    }, [initialText]);

    const handleSubmit = () => {
        onSubmit(text, editIndex);
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <div className="note-dialog-overlay">
            <div className="note-dialog">
                <h3>{day} - {editIndex !== null ? 'Edit Note' : 'Add Note'}</h3>
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
                <div className="note-dialog-actions">
                    <button onClick={handleSubmit}>{editIndex !== null ? 'Update' : 'Add'}</button>
                    {editIndex !== null && <button onClick={handleDelete}>Delete</button>}
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default NoteDialog;

