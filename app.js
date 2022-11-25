const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  // res.json(products);
  res.send(
    '<a href="/products/1">PRODUCT 1</a><br/><a href="/products/2">PRODUCT 2</a><br/><a href="/products/3">PRODUCT 3</a><br/>'
  );
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  const newProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!newProduct) res.status(404).send("Not FOUND");
  res.json(newProduct);
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
