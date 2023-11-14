var likeCount = 0;
let correctUsername="damjan";
let correctPassword="sokolovski123";

function like() {
    likeCount++;
    document.getElementById("counter").textContent = likeCount;
}

function najava() {
    var loginButton = document.getElementById("loginButton");
    var contentDiv = document.getElementById("content");
    loginButton.style.display = "none";
    contentDiv.style="position:absolute; margin: auto; top: 0";
    contentDiv.innerHTML = "<input type='text' id='username' placeholder='Username'></br><input type='password' id='password' placeholder='Password'><button id='loginButton'>Најави се</button>";
    document.getElementById('loginButton').addEventListener('click', function() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if (username === correctUsername && password === correctPassword) {
            alert('Успешно се најавивте!');
            contentDiv.innerHTML = "<p style='position:absolute; margin: auto; top: 50px; left: 30px'>" + username;
        }

        else {
            alert('Невалидно корисничко име или пасворд. Обидете се повторно.');
            contentDiv.style.display = "block";
        }
    });
}

window.addEventListener('scroll', function() {
    var footer = document.getElementById('mainFooter');
    if (this.window.scrollY >= (document.body.scrollHeight - this.window.innerHeight)) {
        footer.style.display = 'block';
        footer.style.bottom = '0';
    }

    else {
        footer.style.bottom = '-400px';
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var commentCounter = 1;
    var addCommentButton = document.getElementById('addCommentButton');
    addCommentButton.addEventListener('click', function() {
        var newComment = document.getElementById('newComment').value;

        if (newComment.trim() !== '') {
            var commentContainer = document.getElementById('commentContainer');
            var commentName = document.getElementById('commentName').value;
            var commentDiv = document.createElement('p');
            commentDiv.textContent = '<' + commentName + '>: ' + newComment;
            commentContainer.appendChild(commentDiv);

            document.getElementById('newComment').value = '';
            document.getElementById('commentName').value = '';
            commentCounter++;
        }
    });

    var removeCommentsButton = document.getElementById('removeCommentsButton');
    removeCommentsButton.addEventListener('click', function() {
        var commentContainer = document.getElementById('commentContainer');
        while (commentContainer.firstChild) {
            commentContainer.removeChild(commentContainer.firstChild);
        }
        document.getElementById('newComment').value = '';
        document.getElementById('commentName').value = '';
        commentCounter = 1;
    });
});