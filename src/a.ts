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



// async function insertDataInTable(){
//     const response=await client.query(`

//         insert into users(username,email,password)
//          values($1,$2,$3)
//         `,['vishal3','vishal3@gmail.com','123'])

//         console.log(response)
// }

// insertDataInTable();

async function getusers(){
         const response=await client.query(`select * from users where email=$1`,['vishal3@gmail.com'])

         return response.rows[0];
}


getusers().then((data)=>{
    console.log(data);
})

