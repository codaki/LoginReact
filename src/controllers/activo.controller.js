import { db } from "../db.js"

export const getActivos = (req, res) => {
    const q =  "SELECT * FROM mapadecalor.act_activo;";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getActivoId = (req, res) => {
    const q =
        "SELECT * FROM mapadecalor.act_activo where `act_codigo` = ?;";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
}

export const addActivo = (req, res) => {
        const q = "INSERT INTO mapadecalor.act_activo VALUES (?)";
        const values = [
            req.body.codigo,
            req.body.act_codigo,
            req.body.tac_codigo,
            req.body.fecha_ini,
            req.body.identificacion,
            req.body.nombre,
            req.body.desc,
            req.body.fecha_fin,
            req.body.observacion,
            req.body.valor,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("El activo ha sido creado")
    });
}

export const deleteActivo = (req, res) => {
        const postId = req.params.id
        const q = "delete from mapadecalor.act_activo where `act_codigo` = ?";
        db.query(q, [postId], (err, data) => {
            return res.json("El activo ha sido eliminado");
        })

};

export const updateActivo = (req, res) => {       
        const postId= req.params.id
        //const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";
        const q = "update mapadecalor.act_activo set `act_identificacion` = ? where `act_codigo` = ?;";

        const values = [
            req.body.descripcion,                       
        ]
        db.query(q, [req.body.descripcion, postId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("El activo ha sido actualizado")

        });
}