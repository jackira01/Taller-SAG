const Users = require('../../schemas/Users');

const usersCtrl = {};

usersCtrl.userLogin = async (req, res) => {
  const data = req.body;
  const { user, password } = data;
  try {
    const findUser = await Users.findOne({ user });
    if (findUser && findUser.password == password) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
