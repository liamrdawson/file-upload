import React, {Fragment, useState} from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new formData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Conent-Type': 'multipart/form-data'
                }
            })
        } catch(err) {

        }
    }

    return (
        <Fragment>
            <form >
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">
                        {fileName}
                    </label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>
    )
}

export default FileUpload
