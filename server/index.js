const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//// Place at end of file ////
const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
