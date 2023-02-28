const InputUsername = document.getElementById('username')
const TextAreaComment = document.getElementById('comment')
const CommentsList = document.getElementById('commentsList')

function AddComment() {
    const obj = {
        username: InputUsername.value,
        comment: TextAreaComment.value
    }
    fetch('http://localhost:3000/database',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'saved');
    })
}
// Recieves all comments (GET request)
fetch('http://localhost:3000/database')
.then(res=>res.json())
.then(allcomments=>{
    allcomments.map(single_comment=>{
        console.log(single_comment) // single object from the array
        CommentsList.innerHTML += `<li class="list-group-item"><strong>${single_comment.username}:</strong> ${single_comment.comment}</li>`
    })
})