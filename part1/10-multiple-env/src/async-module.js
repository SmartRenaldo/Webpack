function getComponent() {
    return import('lodash')
    .then(({default: _}) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'async', 'module'], ' ');

        return element;
    })
}

getComponent().then((element) => {
    document.body.appendChild(element);
})
