import axios from "axios";
import React, { useState } from "react";

// type UploadStatus = 'ideal'|'uploading'|'success'|'error';

 export default function FileUploader(){
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('ideal');
//     function  handleFileChnage(e: ChangeEvent<HTMLInputElement>){
//         if(e.target.files){
//             setFile(e.target.files[0]);
//         }
//     }

    const handleFileChnage = (e) => {
        if(e.target.files){
                        setFile(e.target.files[0]);
                    }
        
    }

    const handleFileUpload = async() => {
        if(!file) return;

        setStatus("uploading");

        const formData = new FormData();
        try{
            await axios.post("https://httpbin.org/post", formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            });

            setStatus("success");
        }catch{
            setStatus("error");
        }
    }

    return (
        <div>
            File Upload
            <input type="file" onChange={handleFileChnage}/> 
            {file && (
                <div>
                    File Name: {file.name}
                </div>
            )}
            
            {file && status !== 'uploading' && <button onClick={handleFileUpload}>Upload</button>}
            
            {status === 'success' && (
                <p>Fule uploaded successfully</p>
            )}

{status === 'error' && (
                <p>Fule uploaded cancelled</p>
            )}
        </div>
    )
}