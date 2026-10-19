import React from 'react';
import CampoSelect from '../components/molecules/CampoSelect';
import { renderUI } from './testUtils.js';

describe('CampoSelect', () => {
  it('presenta las opciones y selecciona el valor predeterminado', () => {
    const container = renderUI(
      <CampoSelect
        id="rol"
        label="Rol"
        valorDefecto="cliente"
        opciones={[{ valor: 'admin', texto: 'Administrador' }, { valor: 'cliente', texto: 'Cliente' }]}
      />
    );
    const select = container.querySelector('#rol');
    expect(container.querySelector('label').getAttribute('for')).toBe('rol');
    expect(select.options.length).toBe(2);
    expect(select.value).toBe('cliente');
    expect(select.required).toBeTrue();
  });
});