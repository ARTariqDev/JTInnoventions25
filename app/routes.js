import { index, layout, route } from "@react-router/dev/routes";

const routes = [
  layout("routes/layout.jsx", [
    index("routes/home.jsx"),
    route("/categories", "routes/categories.jsx"),
  ]),
];

export default routes;
