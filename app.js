const express = require('express');
const listRoutes = require('./routes/exercisesList');
const addRoutes = require('./routes/add-exercise');
const editRoutes = require('./routes/edit-exercise');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(listRoutes);
app.use(addRoutes);
app.use(editRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});