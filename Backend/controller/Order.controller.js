const cartModel = require("../model/cart.model");
let orderModel = require("../model/Order.model");

let getAllOrderById = (request, response) => {
  let user = request.body;
  orderModel.find({ uname: user.uname }, (err, data) => {
    if (!err) {
      //sucess
      response.json(data);
    } else {
      //fail
      response.json(err);
    }
  });
};

let addOrder = (request, response) => {
  let order = request.body;
  orderModel.insertMany(order, (err, data) => {
    if (!err) {
      //sucess
      response.send("successful");
    } else {
      response.send("error");
    }
  });
};

// add items delete items in cart
let updateCart = async (req, res) => {
  const userId = req.body.userId;
  const newProductlist = req.body.products; //{quantity,price,name}
  const cart = await cartModel.findOne({ uname: userId });
  if (cart) {
    cart.products = newProductlist;
    await cart.save();
    return res.send("delete success");
  }

  const newCart = new cartModel({ uname: userId, products: newProductlist });
  await newCart.save();
  return res.send("cart not present");
};
//empties cart
let deleteCart = async (req, res) => {
  const userId = req.body.userId;

  const cart = await cartModel.findOne({ uname: userId });
  if (cart) {
    cart.products = [];
    await cart.save();
    return res.send("delete success");
  }
  return res.send("cart not present");
};
//return all cart items
let getCart = async (req, res) => {
  const userId = req.body.userId;

  const cart = await cartModel.findOne({ uname: userId });
  if (cart) {
    return res.json(cart);
  }
  return res.send("cart not present");
};

//empties cart and create an order
let checkOut = async (req, res) => {
  const userId = req.body.userId;

  const cart = await cartModel.findOne({ uname: userId });
  if (cart) {
    price = 0;
    for (product in cart.products) {
      price = price + product.quantity * product.price;
    }
    const order = new orderModel({
      products: cart.products,
      uname: cart.uname,
      status: "Order Placed",
      price,
    });
    await order.save()
    return res.json(order)
  }

  return res.send("cart not present");
};

module.exports = {
  getAllOrderById,
  addOrder,
  getCart,
  deleteCart,
  updateCart,
  checkOut,
};