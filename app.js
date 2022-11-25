const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
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

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let allProducts = [...products];
  if (search) {
    allProducts = allProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    allProducts = allProducts.slice(0, Number(limit));
  }

  if (allProducts.length < 1) {
    // res.send("<h1>No product found");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(allProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
