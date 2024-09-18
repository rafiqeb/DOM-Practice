//    ***********  Element powar upai   **********

// document.getElementsByTagName(h1)   tag gulo ashbe
// document.getElementById('title')   ID gulo ashbe
// document.getElementsByClassName('nav-content')   class gulo ashbe
// document.querySelectorAll('title')     shobgulo item ashbe
// document.querySelector('title')      shudhu matro prothomta ashbe

// document.getElementById('content').style.backgroundColor= 'green'
// document.getElementById('content').style.color='white'
// document.getElementById('content').style.textAlign='center'

// const sections = document.querySelectorAll('section');
// for(const section of sections){
//     section.style.border= '2px solid blue';
//     section.style.marginBottom= '8px';
//     section.style.borderRadius= '8px';
//     section.style.paddingLeft= '15px';
//     section.style.backgroundColor= 'lightgray'
// }

//     **********  add element   ******

//       ******* Kothai add korbo
// const flowerList = document.getElementById('flower-list');

//     ************   Ki add korbo
// const li = document.createElement('li');
// li.innerText= 'new flower';

//     **********  Add child  
// flowerList.appendChild(li);

// const fruitList = document.getElementById('fruit-list');
// const li = document.createElement('li');
// li.innerText= 'Apple';
// fruitList.appendChild(li);

//    **********  Full section Add  ********

// const mainContainer = document.getElementById('main-container');
// const section = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText= 'My food list';
// section.appendChild(h1);
// const ul = document.createElement('ul');
// section.appendChild(ul);
// const li1 = document.createElement('li');
// li1.innerText= 'Briany';
// ul.appendChild(li1)
// const li2 = document.createElement('li');
// li2.innerText= 'Burhani';
// ul.appendChild(li2)
// mainContainer.appendChild(section);

//     **********  Full section add  Inner Html  *********

// const mainContainer = document.getElementById('main-container');
// const sectionCreat = document.createElement('section');
// sectionCreat.innerHTML = `
// <h1>Food list</h1>
//     <ul>
//         <li>Briany</li>
//         <li>Burhani</li>
//         <li>Shingara</li>
//         <li>Porata</li>
//     </ul>
// `
// mainContainer.appendChild(sectionCreat)