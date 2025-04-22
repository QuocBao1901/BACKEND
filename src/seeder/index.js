import categorySeeder from "./category.js"
import productSeeder from "./product.js"
import mongoConnect from "../mongo/mongoConnecter.js";
async function seeder() {
    await mongoConnect()
    console.log("start seeder category");
    await categorySeeder()
    console.log("seeder category done");
    console.log("start seeder product");
    await productSeeder()
    console.log("seeder product done");
    process.exit(0);
}
seeder()