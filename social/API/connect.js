import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"152.42.227.63",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 