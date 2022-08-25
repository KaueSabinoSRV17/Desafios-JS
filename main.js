const component = (tag, singleTag=false, type='') => (text='', clasz='', id='') => {
    return singleTag == true ? `<${tag} class="${clasz}" id="${id}" type="${type}">${text}` : `<${tag} class="${clasz}" id="${id}">${text}</${tag}>`
}
const render = string => document.body.innerHTML += string

const h1 = component('h1')
const number = component('input', true, 'number')
const label = component('label')
const p = component('p')
const button = component('button')
const div = component('div')

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
        [number(label('Digite o número'))],
        'Tirar os decimais'
    )}
    `
)

desafios = document.querySelectorAll('.desafio')