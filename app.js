import express from "express"
import {PORT} from "./config.js"
import cors from "cors"
import { enviar_correo } from "./emails.js"


let app = express ()

app.use (express.json ())
app.use (express.urlencoded ({extended: false}))
app.use (cors ())





app.get ("/", (req, res) => {
    console.log ("Accediendo a la ruta principal")
    res.send ("Bienvenidos a la ruta principal")
})


app.post ("/enviar-email", async (req, res) => {
    console.log ("Accediendo a la ruta /enviar-email")
    const msg = "El correo de bienvenida ha sido enviado exitosamente"
    const {emailTo, asunto, descripcion} = req.body

    await enviar_correo (emailTo, asunto, descripcion, msg)

})



app.listen (PORT, ()=> console.log ("Servidor inicializado en el puerto "+PORT))