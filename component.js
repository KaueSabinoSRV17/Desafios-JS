export const component = (tag, singleTag=false, type='') => (text='', clasz='', id='') => {
    return singleTag == true ? `<${tag} class="${clasz}" id="${id}" type="${type}">${text}` : `<${tag} class="${clasz}" id="${id}">${text}</${tag}>`
}
export const render = string => document.body.innerHTML += string

export const h1 = component('h1')
export const number = component('input', true, 'number')
export const label = component('label')
export const p = component('p')
export const button = component('button')
export const div = component('div')

