import { h1, label, p, number, button, div, render } from './component.js'

const lista = []

const novoDesafio = (title='', inputs='', buttonText='', output='') => {
    lista.push({
        title: title,
        inputs: inputs,
        output: output,
        button: buttonText
    })
    return div(
    `   ${h1(`Desafio ${lista.length} - ${title}`)}
        ${inputs}
        ${p(output)}
        ${button(buttonText)}`, 
        'desafio'
    )
}


const listener = (index, callback, event='click') => {
    const p1 = desafios[index]
    const p2 = p1.querySelector('p')
    const p3 = p1.querySelectorAll('input')
    p1.querySelector('button').addEventListener(event, callback(output=p1, desafio=p2, inputs=p3))
}

render(
    `
    ${novoDesafio(
        'Tirar Decimais do Número',
        [number(label('Digite o número')), number(label('Olá')), number(label('Terceiro'))],
        'Tirar os decimais'
    )}
    `
)

hello()