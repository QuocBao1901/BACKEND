import categoryRouter from "./categoryRoute.js";
import productRouter from "./productRoute.js";
export default function routers(app) {
  app.use("/categories", categoryRouter);
  app.use("/products", productRouter);
  app.get("/", (req, res) => {
    res.render("pages/index", {
      title: "Home",
    });
  });
  app.get("/components", (req, res) => {
    res.render("pages/components", {
      title: "Components",
    });
  });
  app.get("/forms", (req, res) => {
    res.render("pages/forms", {
      title: "Forms",
    });
  });
  app.get("/notifications", (req, res) => {
    res.render("pages/notifications", {
      title: "Notifications",
    });
  });
  app.get("/tables", (req, res) => {
    res.render("pages/tables", {
      title: "Tables",
    });
  });
  app.get("/typography", (req, res) => {
    res.render("pages/typography", {
      title: "Typography",
    });
  });
  app.get("/icons", (req, res) => {
    res.render("pages/icons", {
      title: "Icons",
    });
  });
}
