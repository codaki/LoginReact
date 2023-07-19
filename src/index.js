import app from './app.js'
import {db} from './db.js'

db.connect((err) => {
    if (err) {
        console.error("Error en la conexión a la base de datos, error numero:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos!");
});
app.get("/", (req,res)=>{
    res.json("Conexion al BackEnd")
})
app.listen(3000)
console.log('Servidor en el purerto ',3000)