"use strict"
document.addEventListener('DOMContentLoaded', function () {

let state = document.getElementById('state');
let newState = document.getElementById('newState')


state.addEventListener('change', () => {
    let newValueState = state.value;
    newState.textContent = newValueState;
});

    



});





