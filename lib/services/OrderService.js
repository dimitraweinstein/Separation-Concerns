const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  static async createOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );

    const order = await Order.insert(value);

    return order;
  }

  static async deleteOrder(id) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order has been deleted ${id}`
    );

    const order = await Order.delete(id);

    return order;
  }

  static async updateOrder(id, quantity) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order has been updated ${id}`
    );
 

    const order = await Order.update(id, quantity);

    return order;
  }
};
