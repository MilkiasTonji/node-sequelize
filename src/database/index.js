import * as dotenv from 'dotenv'
dotenv.config()

import { Sequelize } from "sequelize";

const DB = process.env.DBNAME
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASS

console.log(DB, USERNAME, PASSWORD)

const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: (...msg) => console.log(msg)
  });


  const DBConnection = async () => {
    try {
        await sequelize.authenticate()
        return {success: true, message: `Connection has been established successfully.`}
    } catch (error) {
        return {success: false, error: `Unable to connect to the database ${error}`}
    }
  }


export default DBConnection;