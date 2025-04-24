const express = require('express');

const app = express();

const { ServerConfig }  = require("./config");
const router = require("./routes");
const port = ServerConfig.PORT;

app.use("/api",router);

app.listen(port,() => {

    console.log(`Server is started on port ${port}`);
})