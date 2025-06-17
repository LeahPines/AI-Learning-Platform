import express from "express";
import {authRoutes,userRoutes,adminRoutes,promptRoutes,categoryRoutes,subcategoryRoutes,} from "./modules";
import { errorHandler } from "./core/middlewares/errorHandler.middleware";

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/prompt", promptRoutes);
app.use("/category", categoryRoutes);
app.use("/subcategory", subcategoryRoutes);

app.use(errorHandler);

export default app;