import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PlantillaAdmin from '../components/template/PlantillaAdmin';
import { renderUI, click } from './testUtils.js';

describe('PlantillaAdmin', () => {
  beforeEach(() => localStorage.clear());

  it('muestra navegación, contenido y cierra la sesión hacia login', () => {
    localStorage.setItem('user', JSON.stringify({ nombre: 'Ana' }));
    const container = renderUI(
      <MemoryRouter>
        <PlantillaAdmin><h1>Administración de productos</h1></PlantillaAdmin>
      </MemoryRouter>
    );
    expect(container.textContent).toContain('Hola, Ana');
    expect(container.querySelector('a[href="/admin/productos"]').textContent).toBe('Productos');
    expect(container.querySelector('main h1').textContent).toBe('Administración de productos');

    click(container.querySelector('button'));
    expect(localStorage.getItem('user')).toBeNull();
  });
});