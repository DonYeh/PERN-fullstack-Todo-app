const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// Middleware
app.use(cors());

app.use(express.json()); // parses body JSON

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
