import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PlantillaBase from '../components/template/PlantillaBase';
import { renderUI } from './testUtils.js';

describe('PlantillaBase Component', () => {
  it('renderiza navegación y contenido principal', () => {
    const container = renderUI(
      <MemoryRouter><PlantillaBase><h1>Contenido de página</h1></PlantillaBase></MemoryRouter>
    );
    expect(container.textContent).toContain('Neon Fox Gaming');
    expect(container.querySelector('h1').textContent).toBe('Contenido de página');
  });

  it('entrega el total de productos al distintivo del carrito', () => {
    const container = renderUI(
      <MemoryRouter><PlantillaBase totalItemsCount={3}>Contenido</PlantillaBase></MemoryRouter>
    );
    expect(container.textContent).toContain('3');
  });
});