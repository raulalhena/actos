'use client';

import { useState } from 'react';
import Image from 'next/image';
import './ImageUploader.css';

export const ImageUploader = () => {

    const [ bgImage, setBgImage ] = useState(null);
    const [ previewURL, setPreviewURL ] = useState('http://localhost:5000/public/next.svg');
    const [ imgVisibility, setImgVisibility ] = useState('none');

    const handleFile = file => {
        setBgImage(file);
        setPreviewURL(URL.createObjectURL(file));
        setImgVisibility('block');
    };
    
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        alert('drop');
        const file = e.dataTransfer.files[0];
        e.dataTransfer.clearData();
        console.log(file);
        handleFile(file);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const url = 'http://localhost:5000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        // Envío de fichero de imagen al backend para almacenarlo
        // const resp = await fetch('http://localhost:5000/api/events, method: 'POST')
        // const data = await resp.json();
        // setPreviewURL(data.fileUrl);

    };

    const removeImage = e => {
        e.preventDefault();
        setBgImage(null);
        setPreviewURL('');
        setImgVisibility('none');
    };

    return (   
        <div style={{ width: '300px' }} className={'drag-drop-zone image-uploader'}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
        >
            <p>Drag files here to upload<Image src={previewURL} style={{ objectFit: 'cover', display: imgVisibility }} alt='uploaded' width='300' height='300' /></p>
            <button onClick={removeImage}>Remove</button>
        </div>
    );
};
