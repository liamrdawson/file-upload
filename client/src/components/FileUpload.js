import React, {Fragment, useState} from 'react'

const FileUpload = () => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new formData();
        formData.append('file', file);
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
