const db = require('../models/bugSmasherModel.js')

const bugController = {};

bugController.getBugs = async (req, res, next) => {
  try {
    const query = `
    SELECT * FROM bugs;`
    const result = await db.query(query);
    res.locals.bugs = result.rows
    return next();
  } catch (error) {
    return next(error);
  }
}

bugController.createBug = async (req, res, next) => {
  try {
    const { title, priority, description, smashBy} = req.body
    const params = [title, priority, description, smashBy]
    const query = `
    INSERT INTO bugs (title, priority, description, smash_by)
    VALUES($1,$2,$3, $4);`
    const result = await db.query(query,params);
    console.log(result);
    return next();
  } catch (error) {
    return next(error);
  }
}

bugController.smashBug = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [id];
    const query = `
    UPDATE bugs
    set is_smashed=true
    WHERE _id=$1;`
    const result = await db.query(query,params);
    console.log(result);
    return next();
  } catch (error) {
    return next(error)
  }
}

module.exports = bugController;
