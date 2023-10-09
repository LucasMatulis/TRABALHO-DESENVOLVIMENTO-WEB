import mysql2 from 'mysql2/promise';


const con = await mysql2.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD
})


console.log('Conexão com BD realizada');


export{con};