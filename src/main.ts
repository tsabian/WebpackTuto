import TitleComponent from '@/components/titleComponent';
import ImageComponent from '@/components/imageComponent';
import ButtonComponent from '@/components/buttonComponent';
import { PageNotFoundTemplate } from '@/modules/pageNotFoundTemplate';
import { HeandingComponent } from '@/components/headingComponent';

import logo from '@/assets/demo.png';
import licence from '@/files/LICENSE.txt';
import json from '@/files/welcome.json';
import { DefinePlugin } from 'webpack';

const title = new TitleComponent('First page');
const image = new ImageComponent(logo);
const button = new ButtonComponent("Click!");
const warning = new PageNotFoundTemplate();
const head = new HeandingComponent("Pagina principal")

head.create();

title.create();
image.create();
button.create();
warning.create();

let txtDivElement = document.createElement('div');
txtDivElement.innerText = licence;
document.body.appendChild(txtDivElement);

let jsonDivElement = document.createElement('div');
jsonDivElement.innerText = json.greeting;
document.body.appendChild(jsonDivElement);

// console.info(VERS);
console.log(process.env.DB_HOST);
