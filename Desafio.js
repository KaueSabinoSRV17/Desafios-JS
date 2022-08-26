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

class Desafio {
    constructor(title, inputs, button, output) {
        this.title = title,
        this.inputs = inputs,
        this.button = button,
        this.output = output,
        this.element = document.querySelector('.desafio')
        this.render() 
    }
}