import React, { useState } from 'react';
import '../styles/mainpage.css';
import NoteDialog from '../NoteDialog';

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const MainPage = () => {
    const [notes, setNotes] = useState({});
    const [showDialog, setShowDialog] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const openDialog = (day, index = null) => {
        setSelectedDay(day);
        setEditIndex(index);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setSelectedDay(null);
        setEditIndex(null);
        setShowDialog(false);
    };

    const addOrUpdateNote = (text, index) => {
        setNotes(prevNotes => {
            const updatedNotes = { ...prevNotes };
            const dayNotes = updatedNotes[selectedDay] || [];

            if (index !== null) {
                dayNotes[index] = text;
            } else {
                dayNotes.push(text);
            }

            updatedNotes[selectedDay] = dayNotes;
            return updatedNotes;
        });
        closeDialog();
    };

    const deleteNote = (day, index) => {
        setNotes(prevNotes => {
            const updatedNotes = { ...prevNotes };
            const dayNotes = updatedNotes[day] || [];

            const newDayNotes = dayNotes.filter((_, i) => i !== index);
            if (newDayNotes.length === 0) {
                delete updatedNotes[day];
            } else {
                updatedNotes[day] = newDayNotes;
            }

            return updatedNotes;
        });
        closeDialog();
    };

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className="notes-table">
                    <thead>
                        <tr>
                            {daysOfWeek.map(day => (
                                <th key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {daysOfWeek.map(day => (
                                <td key={day}>
                                    {notes[day] && notes[day].map((note, index) => (
                                        <div key={index} className="note">
                                            <span className="note-content">{note}</span>
                                            <button onClick={() => openDialog(day, index)}>View</button>
                                        </div>
                                    ))}
                                    <div className="note">
                                        <button onClick={() => openDialog(day)}>Add Train</button>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            {showDialog && (
                <NoteDialog
                    day={selectedDay}
                    editIndex={editIndex}
                    initialText={editIndex !== null && notes[selectedDay] ? notes[selectedDay][editIndex] : ''}
                    onClose={closeDialog}
                    onSubmit={addOrUpdateNote}
                    onDelete={() => deleteNote(selectedDay, editIndex)}
                />
            )}
        </div>
    );
};

export default MainPage;
