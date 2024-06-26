require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appRouter = require('./router/app_router');
const contactRouter = require('./router/contact-router')
const serviceRouter = require('./router/service-router')
const adminRouter = require('./router/admin-router')
const dbConnect = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}));
app.use(express.json())
app.use("/api/auth", appRouter)
app.use("/api/form", contactRouter)
app.use("/api/data", serviceRouter)
app.use("/api/admin", adminRouter)
app.use(errorMiddleware)

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log('server is up on:', PORT);
    })
}
)