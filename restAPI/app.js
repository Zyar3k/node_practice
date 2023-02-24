const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 8888;

app.use(express.json());

let users = [];

// C
app.post("/users", (req, res) => {
  const createdUser = req.body;
  const userId = uuidv4();
  const userWithId = { ...createdUser, id: userId };
  users.push(userWithId);

  res.send(`User ${createdUser.firstName} added to db`);
});

// R 1
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const foundedUser = users.find((user) => user.id === id);

  res.send(foundedUser);
});

// R
app.get("/users", (req, res) => {
  res.send(users);
});

// U
app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`The user with ${id} updated`);
});

// D
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);

  res.send(`The user with ${id} deleted`);
});

app.listen(PORT, (req, res) => {
  console.log(`Server on http://localhost:${PORT}`);
});
