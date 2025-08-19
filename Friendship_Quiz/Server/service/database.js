

import sql from 'mssql';

const config = {
    user: 'chani2',
    password: 'ch1234',
    server: '127.0.0.1/sqlexpress',
    database: 'Friendship_quiz',
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const connectToDatabase = async () => {
    try {
        let pool = await sql.connect(config);
        console.log('Connected to the database!');
        return pool;
        
    } catch (err) {
       // console.error('Database connection failed! Error:', err);
       console.error('Database connection failed! Error:', err.message || err);

        throw err;
    }
};

export default connectToDatabase;

// 


// import sql from 'mssql';

// const config = {
//     user: 'chani',
//     password: 'ch1234',
//     server: 'zz-sql',
//     database: 'Friendship_quiz',
//     port: 1433,
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     }
// }

// const connectToDatabase = async () => {
//     try {
//         let pool = await sql.connect(config);
//         console.log('Connected to the database!');
//         return pool;
//     } catch (err) {
//         console.error('Database connection failed! Error:', err);
//         throw err;
//     }
// };

// export default connectToDatabase;
