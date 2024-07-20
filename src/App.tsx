import { useState } from 'react'
import './App.css'
import { Item } from './components/Item'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
    id: ItemId
    timestamp: number
    text: string
}

/*const INITIAL_ITEMS: Item[] = [
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: 'Videojuegos',
    },
    {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: 'Libros',
    }
] */

function App() {

    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { elements } = event.currentTarget
        const input = elements.namedItem('item')
        const isInput = input instanceof HTMLInputElement
        if (!isInput || input == null) return

        

        input.value = ''

    }

    

return (
    <main>
        <aside>
            <h1>Prueba técnica de React</h1>
            <h2>Añadir y eliminar elementos de una lista</h2>
            <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
                <label>
                    Elemento a introducir:
                    <input
                        name='item'
                        required
                        type='text'
                        placeholder='Videojuegos 🎮'
                    />
                </label>
                <button>Añadir elemento a la lista</button>
            </form>
        </aside>
        <section>
            <h2>Lista de elementos</h2>
            
                {
                    items.length === 0 ? (
                        <p>
                            <strong>No hay elementos en la lista.</strong>
                        </p>
                    ) : (
                        <ul>{
                        items.map((item) => {
                            return <Item
                            {...item}
                            handleClick={createHandleRemoveItem(item.id)}
                            key={item.id} />
                        })}</ul>
                    )
                }
        </section>
    </main>
)
}

export default App
