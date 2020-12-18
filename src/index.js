import './style.scss';
import Handlebars from 'handlebars/dist/cjs/handlebars'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));