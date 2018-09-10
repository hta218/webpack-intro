console.log("Hello world, I'm learning Webpack");

import _ from 'lodash';
// import printMe from './print';

function component() {
    let ele = document.createElement('div');
    let btn = document.createElement('button');
    let br = document.createElement('br');

    ele.innerHTML = _.join(['Hello', 'Webpack'], '-')
    ele.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    ele.appendChild(br);
    ele.appendChild(btn);


    btn.onclick = e => import(/* webpackChunkName: 'print' */ './print')
                        .then(module => {
                            let print = module.default;
                            print();
                        });

    return ele;
}

document.body.appendChild(component());