import React from 'react';
import AccesoRapido from '../components/molecules/AccesoRapido';
import { renderUI } from './testUtils.js';

describe('AccesoRapido', () => {
  it('muestra el título y descripción como enlace al destino', () => {
    const container = renderUI(
      <AccesoRapido titulo="Productos" descripcion="Administra el catálogo" ruta="/admin/productos" />
    );
    expect(container.querySelector('a').getAttribute('href')).toBe('/admin/productos');
    expect(container.querySelector('h4').textContent).toBe('Productos');
    expect(container.textContent).toContain('Administra el catálogo');
  });
});