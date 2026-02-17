const Users = require('../../schemas/Users');
const bcrypt = require('bcryptjs');

const usersCtrl = {};

usersCtrl.userRegister = async (req, res) => {
  const { user, password, passwordConfirm } = req.body;
  
  try {
    // Validar que la contraseña y su confirmación sean iguales
    if (password !== passwordConfirm) {
      return res.status(400).json({ 
        success: false, 
        message: 'Las contraseñas no coinciden' 
      });
    }

    // Validar que el usuario no exista
    const existingUser = await Users.findOne({ user });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'El usuario ya existe' 
      });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario con rol "user"
    const newUser = new Users({
      user,
      password: hashedPassword,
      rol: 'user',
    });

    await newUser.save();

    res.status(201).json({ 
      success: true, 
      message: 'Usuario registrado exitosamente',
      user: newUser.user,
      rol: newUser.rol,
      isLoggedIn: false,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

module.exports = usersCtrl;
