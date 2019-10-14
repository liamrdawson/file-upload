const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({msg: 'No file was uploaded'})
    } 
});

app.listen(5000, () => console.log('Server started...'));