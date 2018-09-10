console.log("Hello world, I'm learning Webpack");

import _ from 'lodash';
// import printMe from './print';
import { cube } from './math';
import './style.css';

function component() {
    let ele = document.createElement('pre');

    ele.innerHTML = [
        'Hello webpack',
        `5 cube equal to ${cube(5)}`
    ].join('\n\n');
    
    ele.classList.add('hello');

    return ele;
}

document.body.appendChild(component());