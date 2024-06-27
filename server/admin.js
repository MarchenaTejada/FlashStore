const {updateImgProduct} = require("./models/productos.model.js")

const id = 3;
const img = "https://estoydeshopping.com/wp-content/uploads/2023/10/Samsung-Galaxy-A52-caracteristicas.png";
updateImgProduct(id,img, (err, results) => { console.log("Listo")});