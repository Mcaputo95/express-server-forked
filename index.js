import express from 'express';

const app = express();

const port = process.env.port

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.listen(port, () => {
    console.log("Server starting...");
    console.log(`Server listening on port ${port}`);
});