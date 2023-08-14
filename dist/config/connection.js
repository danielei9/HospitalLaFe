const mongoose = require('mongoose');
// url de conexión local y el nombre de la base de datos
mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
// enlaza el track de error a la consola (proceso actual)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to DB OK');
});
//# sourceMappingURL=connection.js.map