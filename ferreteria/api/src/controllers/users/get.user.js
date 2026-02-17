const Users = require('../../schemas/Users');
const bcrypt = require('bcryptjs');

const usersCtrl = {};

usersCtrl.userLogin = async (req, res) => {
  const data = req.body;
  const { user, password } = data;
  try {
    const findUser = await Users.findOne({ user });
    
    if (!findUser) {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario no encontrado',
        isLoggedIn: false,
      });
    }

    // Comparar contraseña usando bcrypt
    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    if (isPasswordValid) {
      res.status(200).json({
        success: true,
        isLoggedIn: true,
        user: findUser.user,
        rol: findUser.rol,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Contraseña incorrecta',
        isLoggedIn: false,
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

module.exports = usersCtrl;

