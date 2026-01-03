import express from "express";
import { APP_SERVER_PORT } from "./config";
import { httpLogger, logger } from "./lib/logger";
import { attachControllers } from "@slowvoid.dev/express";
import { UserController } from "./controllers/user.controller";
import { CategoryController } from "./controllers/category.controller";
import { OrderController } from "./controllers/order.controller";
import { ProductController } from "./controllers/product.controller";
import { ReviewController } from "./controllers/review.controller";
import { ShoppingCartController } from "./controllers/shoppingcart.controller";

const app = express();

app.use(httpLogger);

attachControllers(app, [
  CategoryController,
  OrderController,
  ProductController,
  ReviewController,
  ShoppingCartController,
  UserController
])

app.listen(APP_SERVER_PORT, () => {
  logger.info(`Starting app on port ${APP_SERVER_PORT}`);
});