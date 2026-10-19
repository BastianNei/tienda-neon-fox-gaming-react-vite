import React from 'react';
import { fireEvent } from '@testing-library/react';
import UsuarioForm from '../components/admin/UsuarioForm';
import { renderUI, click } from './testUtils.js';

describe('UsuarioForm', () => {
  it('valida los datos, normaliza el usuario y muestra errores del guardado', () => {
    const onSubmit = jasmine.createSpy('onSubmit').and.returnValues(
      { ok: true },
      { ok: false, error: 'Correo duplicado.' }
    );
    const container = renderUI(<UsuarioForm esNuevo onSubmit={onSubmit} />);
    const form = container.querySelector('form');

    fireEvent.submit(form);
    expect(container.textContent).toContain('El nombre es obligatorio.');
    expect(container.textContent).toContain('El correo es obligatorio.');
    expect(container.textContent).toContain('La contraseña es obligatoria.');

    fireEvent.change(container.querySelector('[name="nombre"]'), { target: { value: '  Ana  ' } });
    fireEvent.change(container.querySelector('[name="apellido"]'), { target: { value: '  Pérez  ' } });
    fireEvent.change(container.querySelector('[name="email"]'), { target: { value: 'ana@example.com' } });
    fireEvent.change(container.querySelector('[name="password"]'), { target: { value: 'clave-segura' } });
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledWith(jasmine.objectContaining({
      nombre: 'Ana', apellido: 'Pérez', email: 'ana@example.com', password: 'clave-segura'
    }));

    click(container.querySelector('button[type="submit"]'));
    expect(container.textContent).toContain('Correo duplicado.');
  });
});