const unAuthRoute = (req, res) => {
  res
    .status(404)
    .send(
      "<div style='display:flex;justify-content: center;align:item:center'>404 Page Not Found</div>"
    );
};
module.exports = unAuthRoute;
