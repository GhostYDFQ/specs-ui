import Button from '../packages/button/index';

const components = [
    Button,
]

const install = function (Vue, options = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$specsOptions = options
}


export default {
    install,
    Button
}
