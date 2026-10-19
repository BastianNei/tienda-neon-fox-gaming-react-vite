import React from 'react';
import CampoFormulario from '../components/molecules/CampoFormulario';
import { renderUI } from './testUtils.js';

describe('CampoFormulario', () => {
  it('asocia la etiqueta y los atributos al campo', () => {
    const container = renderUI(
      <CampoFormulario id="correo" label="Correo" tipo="email" valorDefecto="ana@example.com" />
    );
    const input = container.querySelector('#correo');
    expect(container.querySelector('label').getAttribute('for')).toBe('correo');
    expect(input.type).toBe('email');
    expect(input.value).toBe('ana@example.com');
    expect(input.required).toBeTrue();
  });
});