import React from 'react';
import Campo from '../components/admin/Campo';
import { renderUI } from './testUtils.js';

describe('Campo', () => {
  it('muestra ayuda y prioriza el mensaje de error', () => {
    const container = renderUI(<Campo label="Nombre" ayuda="Ingresa tu nombre"><input /></Campo>);
    expect(container.textContent).toContain('Nombre');
    expect(container.textContent).toContain('Ingresa tu nombre');

    const withError = renderUI(<Campo label="Nombre" ayuda="Ayuda" error="Campo requerido"><input /></Campo>);
    expect(withError.textContent).toContain('Campo requerido');
    expect(withError.querySelector('.form-text')).toBeNull();
  });
});