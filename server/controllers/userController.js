const db = require('../models/bugSmasherModel.js')

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const {username, password, email} = req.body;
    const params = [username, password, email];
    const query = `
    INSERT INTO users (username, hashed_password, email)
    VALUES($1,$2,$3);`
    const result = await db.query(query, params);
    console.log(result)
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = userController