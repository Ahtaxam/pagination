const express = require("express");
const cors = require("cors");

const blogRoute = require("./router/blog");

const app = express();
app.use(express.json());
app.use("/api/v1/blog", blogRoute)




app.listen((3000) , () => {
    console.log(`listning on port ${3000}`);
})

