function myFunc() {
    // if color is red
    if (document.getElementById('content').style.color === 'red') {
        // get element by id and change color
        document.getElementById('content').style.color = 'black';

        //log what code i used
        console.log("document.getElementById('content').style.color = 'black'");
    }

    else {

    //get element by id and change color
    document.getElementById('content').style.color = 'red';

    //log what code i used
    console.log("document.getElementById('content').style.color = 'red'");
    }

}