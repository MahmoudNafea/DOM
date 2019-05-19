//Restart game button
var Restart = document.querySelector("#b");

///Grab all the squares
var squares = document.querySelectorAll("td");

//clear squares functions
function clearboard() {
    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent = " ";

    }
}

restart.addEventListener('click', clearBoard())

//create a function that check the square marker

function changemarker() {
    if (this.textContent === '') {
        this.textContent = 'x';
    } else if (this.textContent === 'x') {
        this.textContent = 'o';
    } else {
        this.textContent = '';
    }
};

//use for loop to add eventlistner to alll squares
for (let index = 0; index < squares.length; index++) {
    squares[index].addEventListener('click', changemarker);

}


