const signUp_bg = document.querySelector('.signup__popup-bg');
const signUp_popup = document.querySelector('.signup-popup');
const signUp_trigger = document.querySelector('.signup-btn');
const sendform_btn = document.querySelector('.send-btn')

const early_bg = document.querySelector('.earlyaccess__popup_bg');
const early_popup = document.querySelector('.earlyaccess__popup');
const access_trigger = document.querySelector('.access-btn');

signUp_trigger.addEventListener('click', (event) => {
    event.preventDefault();
    signUp_bg.classList.add('active')
    signUp_popup.classList.add('active')
})
access_trigger.addEventListener('click', (event) => {
    event.preventDefault();
    early_bg.classList.add('active')
    early_popup.classList.add('active')
})
document.addEventListener('click', (e) => { 
    console.log(e.target)
    if(e.target === signUp_bg || e.target === sendform_btn) { 
        signUp_bg.classList.remove('active');
        signUp_popup.classList.remove('active');
    }
    if(e.target === early_bg) { 
        early_bg.classList.remove('active');
        early_popup.classList.remove('active');
    }
});
