import React from "react";
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../src/App'

describe('App />', () => {
    test('should add a items and remove them', () => {
        const user = userEvent.setup()

        render(<App />)

        // Busca el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        // Buscar el formulario
        const form = screen.getAllByRole('form')
        expect(form).toBeDefined()

    })
    })