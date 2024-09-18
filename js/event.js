//    *********  Option 1  use korbo na ***********
// <button onclick="document.body.style.backgroundColor= 'red'">Make red</button>

//     **********   Option 2  use korbo   IMPORTENT *******
function makeYellow(){
    document.body.style.backgroundColor= 'yellow'
}

//    *********   Option 3   **********
const blueButton = document.getElementById('make-blue');
blueButton.onclick= makeBlue;
function makeBlue(){
    document.body.style.backgroundColor= 'blue'
}
//      ***********  3 another  **********
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick= function makePurple(){
    document.body.style.backgroundColor= 'purple'
}

//      ***********  Option 4    ***********
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor= 'pink'
}
//    ********   Another   *********
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor= 'green';
})

//   **********   Option 4 Final   Eta use korbo  IMPORTENT *******
document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor= 'tomato';
})

//    ***********  Event handaler add   *******
function textChange(){
    const change = document.getElementById('love');
    change.innerText= 'I hate you';
}

//    *********  Add event listener   Eta use korbo   ********
document.getElementById('hate').addEventListener('click', function(){
    const changeText = document.getElementById('love');
    changeText.innerText= 'I miss you';
})

//    ********  Update button change   *******
document.getElementById('btn-update').addEventListener('click', function(){
    const inputFiled = document.getElementById('input');
    const inputText = inputFiled.value;
    const p = document.getElementById('paraghraph');
    p.innerText= inputText;
    inputFiled.value= '';
})

//    **********  Add a comment   ******
// document.getElementById('btn-post').addEventListener('click', function(){
//     const textAria = document.getElementById('new-comment');
//     const newComment = textAria.value;
//     const commentContent = document.getElementById('comment-content');
//     const pr = document.createElement('p');
//     pr.innerText= newComment;
//     commentContent.appendChild(pr)
//     textAria.value= '';
// })

//  Add eventlistener to the button
document.getElementById('btn-submit').addEventListener('click', function(){
    //   Get the comment in textaria
    const lastComment = document.getElementById('last-comment');
    const newComment = lastComment.value;
    //   Set the comment in container
    // step 1 get the comment container
    // step 2 creat a new element (p tag)
    // step 3 set the inner text in p tag
    // step 4 add the p tag in container
    const commentContainer = document.getElementById('container');
    const p = document.createElement('p');
    p.innerText= newComment;
    commentContainer.appendChild(p);
    lastComment.value= '';
})

//      ********** Delete Information  *****
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    const Information = document.getElementById('info');
    Information.style.display= 'none'
})