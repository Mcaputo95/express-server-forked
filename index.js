import express from 'express';

const app = express();

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Homepage");
})

//this is a dummy comment

app.listen(port, () => {
    console.log("Server starting...");
    console.log(`Server listening on port ${port}`);
});