var Name = prompt("Please enter your name:");

while (!isNaN(Name)) {
    var Name = prompt("Enter your name!! :");
}

document.getElementById("user").innerHTML = "Your Name: " + Name;


function GetUserInfo() {
    var Img = prompt("Please past your URL:");
    var MovieName = prompt("Please enter the movie name:");
    var Des = prompt("Please enter movie's describtion :");

    document.getElementById(" ").innerHTML = "Your movie Des: " + Name;


    var x = document.getElementsByClassName("card");
    x[0].innerHTML = x[0].innerHTML + '<img src="' + Img + '" alt="This is your image" /><h3>' + MovieName + '</h3><p>' + Des + '</p><br />';
}
