'use client'

// app/tasks.js
import React, {useEffect, useState} from 'react';
import TaskList from "@/app/components/TaskList";
import task from "@/app/components/Task";
import AddTask from "@/app/components/AddTask";

const Tasks = () => {


    const [tasks, setTasks] = useState([
        // ...
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { id: tasks.length + 1, text: '<p style="color:red">'+ newTask + ' </p>', isCompleted: false }]);
    };
    const handleDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleToggle = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };
    const editTask = (taskId, newText) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task
            )
        );
    };
    // بازیابی وظایف از localStorage در اجرای اولیه
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // ذخیره وظایف در localStorage در هر تغییر
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} editTask={editTask} />
        </div>
    );
};

export default Tasks;
