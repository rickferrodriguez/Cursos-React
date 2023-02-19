console.log('Hola desde JavaScript')

const oponente = 'zed'

const campeones = {
    vayne: 'draven',
    zed: 'malzahar',
    ahri: 'syndra'
}
const defecto = 'caitlyn'

const counter = campeones[oponente] || defecto

console.log('el counter de ' + oponente + ' es: ' +counter)
