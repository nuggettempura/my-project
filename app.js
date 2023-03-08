console.log("My Project")

document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value; 
    var li = "<li>" + text + "</li>";
    document.getElementById("list").innerHTML += li;
    document.getElementById("input").value = ""; // clear the value
  }