import CategoryModel from "../models/categoryModel.js";
import ProductModel from "../models/productModel.js";
const data = [
    {
        code:"ATD_001",
        name:"Áo nam",
        price: 100000,
        image:"product-2.jpg",
        searchString:"ao nam, ao thun tay dai nam",
        size: ["S","M","L"],
        color: ["#ff44ff","3355ff","aaff33"],
        active: true,
        description: "áo thun tay dài nam",
        information: "cả nam nữ",
        categoryCode: "A_001",
        createdAt: new Date(),
    },
    {
        code:"MA_001",
        name:"Máy ảnh",
        price: 10000000,
        image:"product-1.jpg",
        searchString:"may anh",
        // size: ["S","M","L"],
        color: ["#ff44ff","3355ff","aaff33"],
        active: true,
        description: "máy ảnh kỹ thuật số",
        information: "cả nam nữ",
        categoryCode: "MA_001",
        createdAt: new Date(),
    },
    {
        code:"GIAY_001",
        name:"Giày thể thao",
        price: 200000,
        image:"product-4.jpg",
        searchString:"giay",
        size: ["S","M","L"],
        color: ["#ff44ff","3355ff","aaff33"],
        active: true,
        description: "giày thể thao",
        information: "cả nam nữ",
        categoryCode: "G_001",
        createdAt: new Date(),
    },
    {
        code:"MP_001",
        name:"Mỹ phẩm",
        price: 100000,
        image:"product-8.jpg",
        searchString:"my pham",
        size: ["S","M","L"],
        // color: ["#ff44ff","3355ff","aaff33"],
        active: true,
        description: "áo thun tay dài nam",
        information: "cả nam nữ",
        categoryCode: "MP_001",
        createdAt: new Date(),
    },
]
export default async function categorySeeder(){
    await ProductModel.deleteMany()
    const categories = await CategoryModel.find({})
    let writeProduct = []
    for (let product in data){
        const{categoryCode, ...dataOther} = data[product]
        const category = categories.find(categoryItem =>{
            return categoryItem.code === categoryCode
        })
        writeProduct.push({
            categoryId: !!category? category._id : null,
            ...dataOther
        })
    }
    await ProductModel.insertMany(writeProduct)
}