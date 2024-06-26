import express from "express";
const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("hello ji");
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
