exports.createPages = ({ actions: { createPage } }) => {
  const products = require("./src/data/products.json")
  //typically the step of reading data requires a graphql query but here we are reading static data from a file

  products.forEach(product => {
    createPage({
      path: `/product/${product.id}`,
      component: require.resolve("./src/templates/product.js"),
      context: product,
    })
  })
}
