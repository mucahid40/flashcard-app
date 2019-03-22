function myFunc() {
    // if color is red
    if (document.getElementById('beginTitle').style.color === 'red') {
        // get element by id and change color
        document.getElementById('beginTitle').style.color = 'black';

        //log what code i used
        console.log("document.getElementById('beginTitle').style.color = 'black'");
    }

    else {

    //get element by id and change color
    document.getElementById('beginTitle').style.color = 'red';

    //log what code i used
    console.log("document.getElementById('beginTitle').style.color = 'red'");
    }

}
