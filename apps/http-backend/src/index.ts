import express from "express";
const app = express();

app.post("signup", (req, res) => {});

app.get("signin", (req, res) => {});

app.post("create-room", (req, res) => {});

app.listen(3000, () => {
  console.log("express app listening on port 3000");
});
