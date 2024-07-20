import React from "react";
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../src/App'

describe('App />', () => {

    test('Añadir items y eliminarlos', async() => {
        const user = userEvent.setup()

        render(<App />)

        // Busca el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        // Buscar el formulario
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)

        // Asegurar que el elemento se ha agregado
        const list = screen.getByRole('list')
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(1)

        // Asegurarnos de que lo podemos borrar
        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

        const noResults = screen.getByText('No hay elementos en la lista.')
        expect(noResults).toBeDefined

    })
    })