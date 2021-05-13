//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
//The countdowntimer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1; //Set the wait time as 1 sec

    setTimeout(function (){
        //The countdowntimer should display9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000); //Set the wait time as 2 sec

    setTimeout(function(){
        //The countdowntimer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //Set the wait time as 3 sec

    setTimeout(function(){
        //The countdowntimer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //Set the wait time as 4 sec

    setTimeout(function(){
        //The countdowntimer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //Set the wait time as 5 sec

    setTimeout(function(){
        //The countdowntimer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //Set the wait time as 6 sec

    setTimeout(function(){
        //The countdowntimer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //Set the wait time as 7 sec

    setTimeout(function(){
        //The countdowntimer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //Set the wait time as 8 sec

    setTimeout(function(){
        //The countdowntimer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //Set the wait time as 9 sec

    setTimeout(function(){
        //The countdowntimer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //Set the wait time as 10 sec

    setTimeout(function(){
        //The countdowntimer should display Blastoff!!!
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);

}
