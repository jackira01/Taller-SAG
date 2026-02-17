/**
 * Script de inicialización para crear el primer usuario admin
 * Ejecutar: node api/src/init-admin.js
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Users = require('./schemas/Users');

const initAdmin = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos...');

    // Verificar si ya existe un admin
    const existingAdmin = await Users.findOne({ rol: 'admin' });
    if (existingAdmin) {
      console.log('Ya existe un usuario admin en la base de datos');
      process.exit(0);
    }

    // Crear el primer usuario admin
    const username = 'admin';
    const password = 'admin123'; // Cambiar en producción
    const hashedPassword = await bcrypt.hash(password, 10);

    const adminUser = new Users({
      user: username,
      password: hashedPassword,
      rol: 'admin',
    });

    await adminUser.save();
    console.log('✓ Usuario admin creado exitosamente');
    console.log(`  Usuario: ${username}`);
    console.log(`  Contraseña: ${password}`);
    console.log('⚠️  IMPORTANTE: Cambiar la contraseña después de la primera vez que inicie sesión');

    process.exit(0);
  } catch (error) {
    console.error('Error al crear el usuario admin:', error.message);
    process.exit(1);
  }
};

initAdmin();
