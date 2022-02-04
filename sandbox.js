//tutorial #6

const para = document.querySelector('p'); //escoge la primera etiqueta
console.log(para);

const paras = document.querySelectorAll('p'); //selecciona todos los elementos con esa etiqueta tipo lista
console.log(paras);

const errors = document.querySelectorAll('.error');
console.log(errors);

const tittle = document.getElementById('page-tittle');
console.log(tittle);

const clase = document.getElementsByClassName('error');
console.log(clase);

const tag = document.getElementsByTagName('p');
console.log(tag[0]);

const content = document.querySelector('.content');
console.log(content.innerHTML);

//content.innerHTML = '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi', 'sa'];

people.forEach(person =>{
    content.innerHTML += `<p> ${person}</p>`
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

const mssg = document.querySelector('h1');
mssg.setAttribute('style', 'margin: 50px;');

const contenido = document.querySelector('p');
console.log(content.classList);
