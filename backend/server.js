const express = require('express');
const colors = require('colors');
const products = require('./data/products');
const path = require("path");
const morgan = require("morgan");
const connectDb = require('./config/db.js');
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require("./routes/uploadRoutes");
const {errorHandler,notFound} =require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());
connectDb();

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload', uploadRoutes);


app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound);

// error handler
app.use(errorHandler);

app.listen(
    5000,
    console.log(`Server running on port: ${5000}`.yellow.bold)
);