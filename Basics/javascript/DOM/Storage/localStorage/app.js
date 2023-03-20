// localStorage and methods
const [_get, save, del, update] = document.querySelectorAll('button')
const [username, keyInput] = document.querySelectorAll('input')
const output = document.querySelector('.output')

// setItem method -> create data in localstorage
localStorage.setItem('drink','coffee')

save.addEventListener('click',(e)=>{
    console.log(username.value,keyInput.value);
    localStorage.setItem(keyInput.value,username.value)

    let obj = {
        "username":username.value
    }
    
    console.log(typeof JSON.stringify(obj));
    localStorage.setItem(keyInput.value,JSON.stringify(obj))
})

// getItem
_get.addEventListener('click',(e)=>{
    // let Drink = localStorage.getItem('drink')
    let storageData = localStorage.getItem(keyInput.value)
    console.log(storageData);
    if(storageData === null){
        alert('Not found!')
    }
    output.innerText = storageData
})