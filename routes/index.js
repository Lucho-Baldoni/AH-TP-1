import beersRouter from "./beersRouter.js";

const routerAPI = (app) => {
    app.use('/beers', beersRouter);
};

export default routerAPI;