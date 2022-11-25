const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  // res.json(products);
  res.send('<a href="/products">products</a>');
});

app.get("/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
