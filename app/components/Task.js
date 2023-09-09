// components/Task.js
import React, {useState} from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold } from '@tiptap/extension-bold';
import { Underline } from '@tiptap/extension-underline';
import { Color } from '@tiptap/extension-color';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
const Task = ({ task, onDelete, onToggle, editTask  }) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Underline,
            Color,
            Document, Paragraph, Text
        ],
        content: task.text,
        onUpdate: ({ editor }) => {
            console.log(editor.getHTML())
            editTask(task.id,editor.getHTML())
        },
    });

    return (
        <div className="bg-gray-200 p-4 mb-4">
            <div>

                <button className="bg-red-500 text-white px-2 py-1 mr-2" onClick={() => editor.chain().focus().toggleBold().run()}><strong>B</strong></button>
                <button className="bg-red-500 text-white px-2 py-1 mr-2" onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
            </div>
            <h3 className="text-xl">
                <EditorContent editor={editor} />
            </h3>
            <p className="text-sm">{task.isCompleted ? 'Completed' : 'Not Completed'}</p>
            <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500 text-white px-2 py-1 mr-2"
            >
                Delete
            </button>
            <button
                onClick={() => onToggle(task.id)}
                className="bg-green-500 text-white px-2 py-1"
            >
                {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
        </div>
    );
};
export default Task;
