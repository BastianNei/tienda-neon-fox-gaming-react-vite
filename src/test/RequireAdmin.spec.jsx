import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RequireAdmin from '../components/RequireAdmin';
import { renderUI } from './testUtils.js';

describe('RequireAdmin', () => {
  beforeEach(() => localStorage.clear());

  const renderRoute = () => renderUI(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route path="/admin" element={<RequireAdmin />}>
          <Route index element={<p>Zona admin</p>} />
        </Route>
        <Route path="/login" element={<p>Redirigido a login</p>} />
        <Route path="/" element={<p>Redirigido al inicio</p>} />
      </Routes>
    </MemoryRouter>
  );

  it('permite el acceso a administradores', () => {
    localStorage.setItem('user', JSON.stringify({ role: 'Admin' }));
    expect(renderRoute().textContent).toContain('Zona admin');
  });

  it('redirige a clientes al inicio y a usuarios sin sesión al login', () => {
    localStorage.setItem('user', JSON.stringify({ role: 'Cliente' }));
    expect(renderRoute().textContent).toContain('Redirigido al inicio');
    localStorage.removeItem('user');
    expect(renderRoute().textContent).toContain('Redirigido a login');
  });
});