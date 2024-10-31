import {Client} from "pg";
import dotenv from "dotenv"
 dotenv.config();

const client = new Client({
    connectionString:`postgres://postgres:${process.env.POSTGRES_SECRET}@localhost:5432/postgres`
});


client.connect();



// async function createUserTable(){
//     const result=await client.query(`

//         create table users(
//         id serial primary key,
//         username varchar(50)unique not null,
//         email varchar(100)unique not null,
//         password varchar(50) not null)
//         `)


//         console.log(result)
// }

// createUserTable();



async function insertDataInTable(){
    const response=await client.query(`

        insert into users(username,email,password) values('vishal','vishal@gmail.com','vishal1234')
        `)

        console.log(response)
}

insertDataInTable();