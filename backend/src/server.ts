import app from "./app";
const PORT = process.env.PORT;

app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT || 5000}`);
});