
import { Sequelize } from "sequelize";
import { config } from "./config.js";

const sequelize = new Sequelize(config.DBNAME, config.USERNAME, config.PASS, {
    host: 'localhost',
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