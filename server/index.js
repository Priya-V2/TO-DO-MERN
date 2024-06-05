import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is Home Page! Hello, World!!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
