import { index, layout } from "@react-router/dev/routes";

const routes = [layout("routes/layout.jsx", [index("routes/home.jsx")])];

export default routes;
