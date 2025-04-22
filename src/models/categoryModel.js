import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    code: {
      type:String,
      required: [true,"Không được để trống"],
      minLength: [5,"Mã sản phẩm phải dài từ 5 đến 10 kí tự"],
      maxLength: [10, "Mã sản phẩm phải dài từ 5 đến 10 kí tự"]
    },
    name: {
      type: String,
      required: [true,"Không được để trống"]
    },
    image: {
      type: String,
      required: [true,"Không được để trống"]
    },
    searchString: {
      type: String,
      required: [true,"Không được để trống"]
    },
    createdAt: Date,
    UpdatedAt: Date,
    deletedAt: Date,
  },
  {
    versionKey: false,
    collection: "categories",
  }
);

const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel;
