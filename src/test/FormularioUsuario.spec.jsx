import React from 'react';
import FormularioUsuario from '../components/organisms/FormularioUsuario';
import { renderUI } from './testUtils.js';

describe('FormularioUsuario', () => {
  it('renderiza los campos de cuenta, rol y estado con sus valores iniciales', () => {
    const container = renderUI(<FormularioUsuario />);
    expect(container.querySelector('#nombre').value).toBe('Camila Pérez');
    expect(container.querySelector('#correo').type).toBe('email');
    expect(container.querySelector('#rol').value).toBe('Administrador');
    expect(container.querySelector('#estado').value).toBe('Activo');
    expect(container.querySelector('button[type="submit"]').textContent).toBe('Guardar cambios');
  });
});