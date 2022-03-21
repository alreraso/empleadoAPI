const {Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Rene1234',
    database: 'apiempleados',
    port: '5432'
})

const getEmpleados = async (req, res) => {
    const respuesta  = await pool.query('SELECT * FROM empleados');
    res.status(200).json(respuesta.rows)
}

const getEmpleadosById = async (req, res) => {
    const respuesta  = await pool.query('SELECT * FROM empleados WHERE id = $1', [req.params.id]);
    res.status(200).json(respuesta.rows)
}

const crearEmpleado = async (req,res) =>{
    const {nombre,apellido,documento,correo ,rol ,isBoos} = req.body;
    const respuesta = await pool.query('INSERT INTO empleados (nombre,apellido,documento,correo ,rol ,isBoos) VALUES ($1,$2,$3,$4,$5,$6)',[nombre,apellido,documento,correo ,rol ,isBoos]);
    res.send('Empleado creado satisfactoriamente');
}

/* const updateEmpleado = async (req,res) =>{
    const id = req.params.id;
    const {nombre,apellido,documento,correo ,rol ,isBoos} = req.body;
    const respuesta = await pool.query('UPDATE empleados SET nombre = $1 , apellido  = $2,rol = $5 ,isBoos = $6 WHERE id = $7) VALUES ($1,$2,$3,$4,$5,$6)',[
        nombre,
        apellido,
        rol ,
        isBoos,
        id
    ]);
    res.send('Empleado actualziado correctamente');
} */

/* const deleteEmpleado = async (req, res) => {
    const respuesta  = await pool.query('DELETE FROM empleados WHERE id = $1', [req.params.id]);
    res.json('Empleado eliminado')
} */

module.exports = {
    getEmpleados,
    crearEmpleado,
    getEmpleadosById  //,
    /* deleteEmpleado,
    updateEmpleado */
}