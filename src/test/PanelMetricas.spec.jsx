import React from 'react';
import PanelMetricas from '../components/organisms/PanelMetricas';
import { renderUI } from './testUtils.js';

describe('PanelMetricas', () => {
  it('presenta métricas de compras, productos y usuarios', () => {
    const container = renderUI(<PanelMetricas />);
    expect(container.querySelectorAll('h3').length).toBe(3);
    expect(container.textContent).toContain('Compras');
    expect(container.textContent).toContain('Productos');
    expect(container.textContent).toContain('Usuarios');
    expect(container.textContent).toContain('1,234');
  });
});