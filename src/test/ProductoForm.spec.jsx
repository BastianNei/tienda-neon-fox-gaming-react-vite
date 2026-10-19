import React from 'react';
import { fireEvent } from '@testing-library/react';
import ProductoForm from '../components/admin/ProductoForm';
import { renderUI } from './testUtils.js';

describe('ProductoForm', () => {
  beforeEach(() => localStorage.clear());

  it('valida campos obligatorios y envía un producto válido', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    const container = renderUI(<ProductoForm onSubmit={onSubmit} />);
    const form = container.querySelector('form');

    fireEvent.submit(form);
    expect(container.textContent).toContain('El nombre es obligatorio.');
    expect(container.textContent).toContain('Ingresa un precio válido.');
    expect(container.textContent).toContain('El stock debe ser un número entero (0 o más).');
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(container.querySelector('[name="name"]'), { target: { value: '  Mouse gamer  ' } });
    fireEvent.change(container.querySelector('[name="brand"]'), { target: { value: '  Razer  ' } });
    fireEvent.change(container.querySelector('[name="price"]'), { target: { value: '25000' } });
    fireEvent.change(container.querySelector('[name="stock"]'), { target: { value: '4' } });
    fireEvent.change(container.querySelector('[name="description"]'), { target: { value: '  Mouse óptico  ' } });
    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledWith(jasmine.objectContaining({
      name: 'Mouse gamer', brand: 'Razer', price: '25000', stock: '4', description: 'Mouse óptico'
    }));
  });
});