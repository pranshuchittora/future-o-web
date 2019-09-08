var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const POSTS = [
  {
    title: "Something Special",
    content: "Awesome Night",
    img:
      "https://images.unsplash.com/photo-1567891428935-ae5ea5dee2bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Jamming",
    content: "Awesome Night",
    img:
      "https://images.unsplash.com/photo-1567891428935-ae5ea5dee2bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
];

app.get("/", function(req, res) {
  res.json(POSTS);
});

app.listen(4000);
