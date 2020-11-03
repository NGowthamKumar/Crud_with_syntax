import app from './config/express';
require('./config/mongoose');

app.use('/v1', require('./routes/UserRoutes'));

app.listen(8000,() => { console.log("Server running on port 8000...") });