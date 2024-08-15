// let form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//     alert("This page says");
//     event.preventDefault();
//     let username = document.querySelector('#username');
//     let password = document.querySelector('#password');
//     alert('username: ' + username.value + ' password: ' + password.value);
// });



// let form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert("form submitted");

// });




let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("form submitted");

    let inp = document.querySelector("input");
    console.dir("inp");

});
