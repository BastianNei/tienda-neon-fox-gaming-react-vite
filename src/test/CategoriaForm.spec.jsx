import React from 'react';
import { fireEvent } from '@testing-library/react';
import CategoriaForm from '../components/admin/CategoriaForm';
import { renderUI } from './testUtils.js';

describe('CategoriaForm', () => {
  it('valida el nombre y envía la categoría ingresada', () => {
    const onSubmit = jasmine.createSpy('onSubmit').and.returnValue({ ok: true });
    const container = renderUI(<CategoriaForm onSubmit={onSubmit} />);
    const form = container.querySelector('form');

    fireEvent.submit(form);
    expect(container.textContent).toContain('El nombre es obligatorio.');
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(container.querySelector('[name="nombre"]'), { target: { value: 'Audio' } });
    fireEvent.change(container.querySelector('[name="descripcion"]'), { target: { value: 'Periféricos de sonido' } });
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledWith({ nombre: 'Audio', descripcion: 'Periféricos de sonido' });
  });
});