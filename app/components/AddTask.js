import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newTask.trim() !== '') {
            onAddTask(newTask.trim());
            setNewTask('');
        }
    };

    return (
        <div className="bg-gray-200 p-4 mb-4">
            <input
                className="form-control text-lg"
                value={newTask}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default AddTask;
