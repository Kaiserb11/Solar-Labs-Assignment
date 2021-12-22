window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    //sizing
    canvas.height = 600;
    canvas.width = window.innerWidth-4;
    
    //variables

    let painting = false;
    
    
    //drawing 
    

    function finishPosition() {
        painting = false
    }
    function draw(e) {
        
        ctx.lineWidth = 5;
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    //eventListeners canvas

    canvas.addEventListener("mousedown", draw);
    canvas.addEventListener("mouseup", finishPosition);

    //buttons
    document.getElementById("finish").addEventListener("click", myFinish);
    function myFinish(){
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = "orange"; 
        ctx.fill();
    }

    document.getElementById("reset").addEventListener("click", myReset);
    function myReset(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    }
    
});