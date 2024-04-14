require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const apisRouter = require('./routes/apis.routes');
const adminRouter = require('./routes/admin.routes');
const transferLocals = require('./middlewares/transferLocals');
const cookiesCheck = require('./middlewares/cookiesCheck');
//const { log } = require('console');/

const cors = require('cors')

const corsOptions={
  origin: 'http://localhost:5173'
}

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

/* formularios */

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* recursos estaticos */

app.use(express.static(path.join(__dirname,'..', 'public')));


/* Configuracion de cors */
app.use(cors(corsOptions))

 /* Soporte para métodos PUT, PATCH & DELETE */
app.use(methodOverride('_method'))

//* Configuracion de session */
.use(session({
  secret : 'GranoDeOro!',
  resave: true,
  saveUninitialized: true 
}))

.use(cookiesCheck)
.use(transferLocals)



/* rutas*/ 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/apis', apisRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const port=3000
console.log(`server running http://localhost:${port}`);
