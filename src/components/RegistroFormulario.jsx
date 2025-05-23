import React from 'react';
import './RegistroFormulario.css';

const RegistroFormulario = () => {
  return (
    <div className="registro-container">
      <h2>Formulario de Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu teléfono" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmar-password">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmar-password"
            name="confirmar-password"
            placeholder="Confirma tu contraseña"
          />
        </div>

        <div className="form-group">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroFormulario;