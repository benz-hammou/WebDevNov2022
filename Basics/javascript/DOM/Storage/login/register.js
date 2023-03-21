const [username,password] = document.querySelectorAll('input')

const registerBtn = document.querySelectorAll('a')[1]
const EyeIcon = document.querySelector('.fa-eye-low-vision')

// event
registerBtn.addEventListener('click',()=>{
    // create user object here
    const NewUser = {
        "username":username.value,
        "password":password.value
    }
    console.log(NewUser);
    if(username.value !=='' && password.value !==''){
        const ConvertObjToString = JSON.stringify(NewUser);
        console.log(ConvertObjToString)
        sessionStorage.setItem('user',ConvertObjToString)
    }
})

EyeIcon.addEventListener('click',(e)=>{
    console.log(e.target)
    let typeOfPasswordInput = console.log(typeOfPasswordInput);
})

// Not finish yet 