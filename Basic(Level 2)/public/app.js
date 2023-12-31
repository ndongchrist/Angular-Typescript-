import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { payment } from './classes/paymemt.js';
let Dog = {
    name: "jack",
    age: 5,
    height: 2.3,
    color: 'black',
    sound: () => {
        console.log("Wooouf");
    }
};
Dog.sound();
const anchor = document.querySelector('a');
const form = document.querySelector(".new-item-form");
// console.log(form.children);
let docOne;
let doctwo;
docOne = new invoice('yoshi', "web work", 200);
doctwo = new payment('mario', "plumbing work", 250);
let docs = [];
docs.push(docOne);
docs.push(doctwo);
console.log(docs);
const invone = new invoice('mario', "work on the mario", 250);
const invtwo = new invoice('luigi', "work on the luigi", 300);
let invoices = [];
invoices.push(invone);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details ');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
