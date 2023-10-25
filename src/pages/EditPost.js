import { useState } from "react";
import { Navigate } from "react-router-dom";


export default function Editor() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    function updatePost(ev) {
        ev.preventDefault();
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }



    return (
        <form onSubmit={updatePost}>
            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)} />

            <input type="summary"
                placeholder={'summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />

            <input type="file" onChange={ev => setFiles(ev.target.files)} />

            <Editor onChange={setContent} value={content} />

            <button style={{ marginTop: '5px' }}>Create Post</button>
        </form>
    )
};

