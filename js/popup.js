const signUp_bg = document.querySelector('.signup__popup-bg');
const signUp_popup = document.querySelector('.signup-popup');
const signUp_trigger = document.querySelector('.signup-btn');

signUp_trigger.addEventListener('click', (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    signUp_bg.classList.add('active')
    signUp_popup.classList.add('active')
})
// signUp_bg.addEventListener('click', (event) => {
//     signUp_bg.classList.re('active')
//     signUp_popup.classList.re('active')
// })
document.addEventListener('click', (e) => { 
    if(e.target === signUp_bg) { 
        signUp_bg.classList.remove('active');
        signUp_popup.classList.remove('active');
    }
});