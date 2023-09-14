// components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle, editTask }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    editTask={editTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
