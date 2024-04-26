function fetchPoke(){
    let id = document.getElementById("pokeId").value
    console.log(id)
}

var input = document.getElementById("pokeId");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
});