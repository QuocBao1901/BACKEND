import express from "express";
import {
  listProduct,
  createProduct,
  renderPageCreateProduct,
  renderPageUpdateProduct,
  updateProduct,
  renderPageDeleteProduct,
  deleteProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", listProduct);

router.get("/create", renderPageCreateProduct); // render ra cai form  create
router.post("/create", createProduct);

router.get("/update/:id", renderPageUpdateProduct); // render ra cai form update
router.post("/update/:id", updateProduct);

router.get("/delete/:id", renderPageDeleteProduct); // render ra cai form delete
router.post("/delete", deleteProduct);

export default router;
