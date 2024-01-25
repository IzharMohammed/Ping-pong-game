document.addEventListener('DOMContentLoaded', () => {

    let border = document.getElementById('border')
    let paddle = document.getElementById('paddle')
    let ball = document.getElementById('ball')

    let ballx = 10
    let bally = 10

    let dx = -13;
    let dy = 10;

    // ball.style.left = `${ballx}px`
    // ball.style.top = `${bally}px`
    function animateBall() {
        //   ballx += dx;
        //   ball.style.left = ball.offsetLeft + dx +'px'
        //   if (ballx >= border.offsetWidth - ball.offsetWidth || ballx <= 0) {
        //       dx = -dx
        //   }

        //   bally += dy;

        //   ball.style.top = ball.offsetTop + dy + 'px'
        // if (bally >= border.offsetHeight - ball.offsetHeight || bally <= 0) {
        //       dy = -dy
        //   }
        // // // //   if(ballx<paddle.offsetLeft+paddle.offsetWidth && paddle.offsetTop+paddle.offsetHeight>bally && paddle.offsetTop<bally){
        // // // //      dx=-dx
        // // // //  }


        if (ball.offsetLeft < 0 || ball.offsetLeft > border.offsetWidth - ball.offsetWidth) {
            dx = -dx
        }

        if (ball.offsetTop < 0 || ball.offsetTop > border.offsetHeight - ball.offsetHeight) {
            // dy = -dy
        }

        if (ball.offsetLeft < paddle.offsetLeft + paddle.offsetWidth && ball.offsetTop >= paddle.offsetTop && ball.offsetTop < paddle.offsetTop + paddle.offsetHeight) {
             dx = -dx
        }

console.log(`ball = ${ball.offsetTop-ball.offsetHeight}  , , paddle = ${paddle.offsetTop}`);

        if(ball.offsetTop-ball.offsetHeight > paddle.offsetTop){
            // dx = -dx
        }





        ball.style.left = ball.offsetLeft + dx + 'px'
        // ball.style.top = ball.offsetTop + dy + 'px'

        requestAnimationFrame(animateBall)
    }
    requestAnimationFrame(animateBall)










    let paddlex = 0
    let y = 7
    paddle.style.top = `0px`

    document.addEventListener('keydown', function (event) {
        event.preventDefault() // prevents the execution of the default event behaviour
        if (event.key === 'ArrowUp' && paddlex >= 0) {
            paddlex = paddlex - y
            paddle.style.top = `${paddlex}px`
        }
        if (event.key === 'ArrowDown' && paddlex <= border.offsetHeight - 64) {
            paddlex = paddlex + y
            paddle.style.top = `${paddlex}px`
        }
    });
    // document.addEventListener('mousemove',(event)=>{
    //     let distOfMouseFromTop = event.clientY
    //     let distOfMouseFromLeft = event.clientX
    //     let mousePointControl = distOfMouseFromTop-border.offsetTop-paddle.offsetHeight/2;
    //         if(distOfMouseFromLeft > border.offsetLeft+border.offsetWidth/2 || distOfMouseFromLeft < border.offsetLeft) return;
    //         if(distOfMouseFromTop < border.offsetTop || distOfMouseFromTop > border.offsetTop+border.offsetHeight || border.offsetLeft > distOfMouseFromLeft || border.offsetLeft+border.offsetWidth < distOfMouseFromLeft) return;
    //         paddle.style.top = `${mousePointControl}px`
    //         console.log(mousePointControl);
    // })

    document.addEventListener('mousemove', (event) => {
        let distOfMouseFromTop = event.clientY;
        let distOfMouseFromLeft = event.clientX;

        // Calculate the mouse position relative to the border
        let mousePointControl = distOfMouseFromTop - border.offsetTop - paddle.offsetHeight / 2;

        // Check if the mouse position is within the border's height
        if (mousePointControl < 0) {
            mousePointControl = 0; // Set to the top if it goes above
        } else if (mousePointControl > border.offsetHeight - paddle.offsetHeight) {
            mousePointControl = border.offsetHeight - paddle.offsetHeight; // Set to the bottom if it goes below
        }
        if (distOfMouseFromLeft > border.offsetLeft + border.offsetWidth / 2 || distOfMouseFromLeft < border.offsetLeft) return;
        if (distOfMouseFromTop < border.offsetTop || distOfMouseFromTop > border.offsetTop + border.offsetHeight || border.offsetLeft > distOfMouseFromLeft || border.offsetLeft + border.offsetWidth < distOfMouseFromLeft) return;

        paddle.style.top = `${mousePointControl}px`;

    });








});