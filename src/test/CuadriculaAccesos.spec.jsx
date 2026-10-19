import React from 'react';
import CuadriculaAccesos from '../components/organisms/CuadriculaAccesos';
import { renderUI } from './testUtils.js';

describe('CuadriculaAccesos', () => {
  it('muestra los ocho accesos administrativos con sus rutas', () => {
    const container = renderUI(<CuadriculaAccesos />);
    expect(container.querySelectorAll('a').length).toBe(8);
    expect(container.querySelector('a[href="/admin/dashboard"] h4').textContent).toBe('Dashboard');
    expect(container.querySelector('a[href="/admin/usuarios"] h4').textContent).toBe('Usuarios');
    expect(container.querySelector('a[href="/"] h4').textContent).toBe('Tienda');
  });
});