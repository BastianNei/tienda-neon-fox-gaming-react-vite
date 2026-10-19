import React from 'react';
import Footer from '../components/organisms/Footer';
import { renderUI } from './testUtils.js';

describe('Footer', () => {
  it('renderiza las secciones de ayuda, información y redes', () => {
    const container = renderUI(<Footer />);
    expect(container.querySelector('footer#footer')).not.toBeNull();
    expect(container.textContent).toContain('Centro de ayuda');
    expect(container.textContent).toContain('Términos y condiciones');
    expect(container.querySelectorAll('.social-link a').length).toBe(3);
  });
});