'use strict'

let addBtn = document.querySelector('.add');
let resBtn = document.querySelector('#reset')


function add(){
    let outputtedResult = document.querySelector('#output');
    let input1 = Number(document.querySelector('#input1').value)
    let input2 = Number(document.querySelector('#input2').value)
    console.log(typeof input1);
    let output
    output = input1 + input2

    outputtedResult.innerText = output

}

addBtn.addEventListener('click', add)

// reset btn
resBtn.addEventListener('click',()=>{
    window.location.reload()
})