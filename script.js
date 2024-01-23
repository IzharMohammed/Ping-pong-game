document.addEventListener('DOMContentLoaded', () => {

    let border = document.getElementById('border')
    let paddle = document.getElementById('paddle')
    let ball = document.getElementById('ball')

    let ballx = 20
    let bally = 20

    let dx = 2;
    let dy = 2;

    ball.style.left = `${ballx}px`
    ball.style.top = `${bally}px`

    console.log(border.offsetWidth);
    console.log(ball.offsetHeight);
   
    setInterval(() => {
        ballx += dx;


        ball.style.left = `${ballx}px`
        if (ballx >= border.offsetWidth - ball.offsetWidth || ballx <= 0) {
            dx = -dx
        }

        bally += dy;

        ball.style.top = `${bally}px`
        if (bally >= border.offsetHeight - ball.offsetHeight || bally <= 0) {
            dy = -dy
        }

    }, 1)
    let paddlex = 0
let y = 7
paddle.style.top = `0px`

document.addEventListener('keydown', function (event) {
event.preventDefault() // prevents the execution of the default event behaviour
    if (event.key === 'ArrowUp' && paddlex>=0) {
        paddlex = paddlex - y
        paddle.style.top = `${paddlex}px`
        console.log('from top', paddle.style.top);

        console.log('Up arrow key pressed');
    } 
     if (event.key === 'ArrowDown' && paddlex<=border.offsetHeight-64 ) {


        paddlex = paddlex + y
        paddle.style.top = `${paddlex}px`
        console.log('to top', paddle.style.top);

        console.log('Down arrow key pressed');
    }
    console.log('border height ',border.offsetHeight);
});
});






