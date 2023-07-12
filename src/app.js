const express = require('express');
require('dotenv').config();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');
const taskRoutes = require('./routes/tasks.router');
const CategoryRoutes = require('./routes/category.router');


db.sync()
    .then(() => console.log("base de datos sincronizada"))

const PORT = process.env.PORT || 8000;

const app = express();


initModels();

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);
app.use(CategoryRoutes);


app.get('/', (req, res) => {
    res.send('servidor funcionando')
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});
