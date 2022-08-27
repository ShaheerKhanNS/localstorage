

function submit(event){
//event.preventDefault();
let name1 = event.target.username.value;
let email = event.target.useremail.value;

localStorage.setItem('name',name1);
localStorage.setItem('email',email);

}