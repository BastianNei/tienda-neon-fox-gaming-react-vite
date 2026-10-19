import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import EncabezadoAdmin from '../components/admin/EncabezadoAdmin';
import { renderUI } from './testUtils.js';

describe('EncabezadoAdmin', () => {
  it('muestra título, subtítulo, acciones y enlace de regreso', () => {
    const container = renderUI(
      <MemoryRouter>
        <EncabezadoAdmin titulo="Productos" subtitulo="Administra el catálogo" volverA="/admin">
          <button type="button">Crear</button>
        </EncabezadoAdmin>
      </MemoryRouter>
    );
    expect(container.querySelector('h1').textContent).toBe('Productos');
    expect(container.textContent).toContain('Administra el catálogo');
    expect(container.querySelector('a[href="/admin"]').textContent).toBe('Volver');
    expect(container.querySelector('button').textContent).toBe('Crear');
  });
});