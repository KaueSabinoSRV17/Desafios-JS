export class Desafio {
    constructor(title, inputs, button, output) {
        this.title = title,
        this.inputs = inputs,
        this.button = button,
        this.output = output,
        this.element = document.createElement('div')
        this.render()
    }
    render() {
        let elementos = []
        const createTags = (tag, text, attributes={}) => {
            const elemento = document.createElement(tag)
            elemento.innerHTML = text
            elemento.id = attributes.id || ''
            elemento.className = attributes.class || ''
            elemento.type = attributes.type || ''
            elementos.push(elemento)
            return elemento
        }
        createTags('h1', this.title)
        createTags('p', this.output)
        createTags('button', this.button)
        elementos.forEach(elemento => document.body.appendChild(elemento))
        console.log(elementos)
    }
}