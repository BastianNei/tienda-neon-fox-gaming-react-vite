import React from 'react';
import TarjetaMetrica from '../components/molecules/TarjetaMetrica';
import { renderUI } from './testUtils.js';

describe('TarjetaMetrica', () => {
  it('muestra título, valor, detalle y colores configurados', () => {
    const container = renderUI(
      <TarjetaMetrica titulo="Compras" valor="12" detalle="Este mes" colorFondo="#123456" colorTexto="#fff" />
    );
    expect(container.textContent).toContain('Compras');
    expect(container.querySelector('h2').textContent).toBe('12');
    expect(container.textContent).toContain('Este mes');
    expect(container.firstElementChild.style.backgroundColor).toBe('rgb(18, 52, 86)');
  });
});