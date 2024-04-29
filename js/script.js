function fetchPoke(){
  let id = document.getElementById("pokeId").value.toLowerCase()
  let xhr = new XMLHttpRequest();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function(){
    if(this.readyState ===4 && this.status === 200){
      let response = JSON.parse(this.responseText)
      console.log(response)
      console.log(response.name)
      displayPoke(response)
    } else if(this.readyState === 4){
      console.log("Error :(",this.statusText)
      let error = document.getElementById("showUp");
      error.innerHTML = `
      <span class="idPoke_col">000 -</span><span> Error :(</span>
      `;
      let PokeSprite = document.getElementById("sprite");
      if(data.response === "error"){
        PokeSprite.innerHTML = `<p>Error ${data.response}</p>`;
      } else{
      }
    }
  }
  xhr.send();
}

function minus_id(){
  let id = document.getElementById("dataIdIs").innerText
  console.log(id)
  let newId = parseInt(id)
  console.log(newId)
  newId = newId - 1
  let xhr = new XMLHttpRequest();
  let url = `https://pokeapi.co/api/v2/pokemon/${newId}`
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function(){
    if(this.readyState ===4 && this.status === 200){
      let response = JSON.parse(this.responseText)
      console.log(response)
      console.log(response.name)
      displayPoke(response)
    } else if(this.readyState === 4){
      console.log("Error :(",this.statusText)
      let error = document.getElementById("showUp");
      error.innerHTML = `
      <span class="idPoke_col">000 -</span><span> Error :(</span>
      `;
      let PokeSprite = document.getElementById("sprite");
      if(data.response === "error"){
        PokeSprite.innerHTML = `<p>Error ${data.response}</p>`;
      } else{
      }
    }
  }
  xhr.send();
}

function plus_id(){
  let id = document.getElementById("dataIdIs").innerText
  console.log(id)
  let newId = parseInt(id)
  console.log(newId)
  newId = newId + 1
  let xhr = new XMLHttpRequest();
  let url = `https://pokeapi.co/api/v2/pokemon/${newId}`
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function(){
    if(this.readyState ===4 && this.status === 200){
      let response = JSON.parse(this.responseText)
      console.log(response)
      console.log(response.name)
      displayPoke(response)
    } else if(this.readyState === 4){
      console.log("Error :(",this.statusText)
      let error = document.getElementById("showUp");
      error.innerHTML = `
      <span class="idPoke_col">000 -</span><span> Error :(</span>
      `;
      let PokeSprite = document.getElementById("sprite");
      if(data.response === "error"){
        PokeSprite.innerHTML = `<p>Error ${data.response}</p>`;
      } else{
      }
    }
  }
  xhr.send();
}


//:3
const input = document.getElementById("pokeId");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function displayPoke(data){
  let Pokemon = document.getElementById("showUp");
  if(data.response === "error"){
    Pokemon.innerHTML = `<p>Error ${data.response}</p>`;
  } else{
    let name = data.name.charAt(0).toUpperCase()+data.name.slice(1);
    Pokemon.innerHTML = `<span id="dataIdIs" class="idPoke_col">${data.id}</span><span class="idPoke_col"> - </span><span>${name}</span>`;
  }
  let PokeSprite = document.getElementById("sprite");
  if(data.response === "error"){
    PokeSprite.innerHTML = `<p>Error ${data.response}</p>`;
  } else if(data.sprites.other.showdown.front_default != null){
    PokeSprite.innerHTML = `<img class="sprite_img" src="${data.sprites.other.showdown.front_default}"/>`;
  }else{
    PokeSprite.innerHTML = `<img class="sprite_img" src="${data.sprites.front_default}"/>`;
  }
}