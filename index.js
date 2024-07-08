const express = require('express');

const app = express();
const port = 50012;
app.listen(port,() => {

    console.log(`Server is started on port ${port}`);
})