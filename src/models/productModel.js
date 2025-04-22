import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    code: {
      type:String,
      required: [true,"Không được để trống"],
    },
    name: {
      type: String,
      required: [true,"Không được để trống"]
    },
    price: {
      type: Number,
      required: [true,"Không được để trống"]
    },
    searchString: {
      type: String,
      required: [true,"Không được để trống"]
    },
    size: [String],
    color: [String],
    active: Boolean,
    description: String,
    information: String,
    images: [String],
    categoryId: Object,
    createdAt: Date,
    UpdatedAt: Date,
    deletedAt: Date,
  },
  {
    versionKey: false,
    collection: "products",
  }
);

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
