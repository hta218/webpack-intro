console.log("Hello world, I'm learning Webpack");

async function getComponent() {
    // import() use Promise
    let ele = document.createElement('div');
    const _ = await import(/* webpackChunkName: 'lodash' */ 'lodash');

    ele.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return ele;
}

getComponent().then(comp => {
    document.body.appendChild(comp);
});