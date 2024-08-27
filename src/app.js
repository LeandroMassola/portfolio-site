const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const path = require('path')
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'https://scintillating-piroshki-5341b6.netlify.app/', // Cambia esto por la URL de tu frontend en Netlify
    methods: ['GET', 'POST'],
}));

/* app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); */

/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use('/', indexRouter);




// Sirve los archivos de React en producción
/* if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
    });
} */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


/* const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}  , http://localhost:${PORT}/`);
}); */