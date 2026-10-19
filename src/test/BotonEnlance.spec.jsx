import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BotonEnlace from '../components/atoms/BotonEnlace';
import { renderUI } from './testUtils.js';

describe('BotonEnlace', () => {
  it('renderiza un enlace primario o secundario con su destino', () => {
    const container = renderUI(
      <MemoryRouter><BotonEnlace ruta="/admin" texto="Administración" esSecundario /></MemoryRouter>
    );
    const link = container.querySelector('a');
    expect(link.getAttribute('href')).toBe('/admin');
    expect(link.textContent).toBe('Administración');
    expect(link.className).toBe('boton secundario');
  });
});