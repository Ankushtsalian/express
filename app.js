const express = require("express");
const app = express();
const { products } = require("./data");
const logger = require("./logger");

app.use("/api", logger, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<ol><li><a href='/api/products/product/1'>product1</a></li><li><a href='/api/products/product/2'>product2</a></li><li><a href='/api/products/product/3'>product3</a></li><li><a href='/api/products/product/4'>product4</a></li></ol>"
  );
});

app.get("/api/products/", (req, res) => {
  res.json(products);
});

app.get("/api/products/product/:productId", (req, res) => {
  const { productId } = req.params;
  const newProduct = products.filter(
    (product) => product.id === Number(productId)
  );

  res.json(newProduct);
});

app.get("/api/products/query", (req, res) => {
  const { search, limit, sortBy } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.includes(search)
    );
  }
  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }
  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  if (sortBy === "a to z") {
    filteredProducts = filteredProducts.sort(compare);
    console.log(filteredProducts);
  } else if (sortBy === "z to a") {
    filteredProducts = filteredProducts.sort(compare);
    filteredProducts = filteredProducts.reverse();
  }
  return res.json(filteredProducts);
});
app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      "<div style='display:flex;justify-content: center;align:item:center'>404 Page Not Found</div>"
    );
});

app.listen(5000, () => console.log("started server at port 5000"));
