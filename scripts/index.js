let url = "https://www.potterapi.com/v1/";
let houses = document.querySelector("#houseget");
let sorting = document.querySelector("#sortget");
let characters = document.querySelector("#characterget");
let spells = document.querySelector("#spellget");
const key = "$2a$10$lr1L0LQgd8bxVJ7r1RLkK.JvejWMSdhYL0kRtVbJwi1YllmCsiQwO";
var searchCharacter = document.getElementById("searchCharacter");
var searchSpell = document.getElementById("searchSpell");
var searchHouse = document.getElementById("searchHouse");
let charactersList = [];
let housesList = [];
let spellsList = [];

searchCharacter.addEventListener("input", () =>
  searchCharacters(searchCharacter.value)
);
searchSpell.addEventListener("input", () => searchSpells(searchSpell.value));
searchHouse.addEventListener("input", () => searchHouses(searchHouse.value));

// console.log(url + "houses" + "?key=" + key);

const getHouses = async () => {
  axios
    .get(url + "houses" + "?key=" + key)
    .then((res) => showHouses(res.data))
    .catch((err) => console.error(err));
};

const getCharacters = async () => {
  axios
    .get(url + "characters" + "?key=" + key)
    .then((res) => showCharacters(res.data))
    .catch((err) => console.error(err));
};

const getSpells = async () =>{
    axios.get(url + "spells" + "?key=" + key)
    .then(res => showSpells(res.data))
    .catch(err => console.error(err));
}


const sortNow = async () => {
    axios.get(url + "sortingHat" +"?key=" + key)
    .then(res => showSort(res.data))
    .catch(err => console.error(err));
}

const showSort = (text) => {
   sorting.innerHTML = "";
   let textToBeInserted = `So, The sorting hat has chosen. You are now going to be a member of  ${text}!`
   var sorttext = document.createElement("div");
   sorttext.className = "container-fuid padding"
   sorttext.innerHTML = `<p class="lead newfont">${textToBeInserted}</p>`;
   sorting.appendChild(sorttext);

}

const showSpells = (arr) => {
    let cards = '';
    // console.log(arr);
    arr.forEach(element => {
        spellsList.push(element);
        // console.log(element.spell);
        cards += ` <div class = "col-sm-12 col-md-4">
        <div class="card text-white bg-dark mb-3 padding" style="max-width: 18rem;">
        <div class="card-header cardhead">${element.spell}</div>
        <div class="card-body">
        <ul class="list-group dark">
                    <li class="list-group-item montsa">Type : ${element.type}</li>
                    <li class="list-group-item montsa">Effect : ${element.effect}</li>
                </ul>
        </div>
        </div>
      </div>`
    });
    spells.innerHTML = cards;
}


const showCharacters = (arr) => {
    let cards = '';
    // console.log(arr);
    arr.forEach(element => {
        charactersList.push(element);
        // console.log(element.name);
        cards += ` <div class = "col-sm-12 col-md-4">
        <div class="card bg-success text-light mb-3 colorchange" style="max-width: 18rem;">
        <div class="card-header cardhead">${element.name}</div>
        <div class="card-body">
        <ul class="list-group">
                    <li class="list-group-item montsa">Role : ${element.role}</li>
                    <li class="list-group-item montsa">House : ${element.house}</li>
                    <li class="list-group-item montsa">School : ${element.school}</li>
                    <li class="list-group-item montsa">Ministry Of Magic : ${element.ministryOfMagic}</li>
                    <li class="list-group-item montsa">Order Of The Phoenix : ${element.orderOfThePhoenix}</li>
                    <li class="list-group-item montsa">Dumbledores Army : ${element.dumbledoresArmy}</li>
                    <li class="list-group-item montsa">Death Eater : ${element.deathEater}</li>
                    <li class="list-group-item montsa">Blood Status : ${element.bloodStatus}</li>
                    <li class="list-group-item montsa">Species : ${element.species}</li>
                </ul>
        </div>
        </div>
      </div>`
    });
    characters.innerHTML = cards;
}

const showHouses = (arr) =>{
     let cards =  ``;
     arr.forEach(element => {
         housesList.push(element);
         cards += `<div class = "col-sm-12 col-md-4">
         <div class="card mb-3 text-dark" style="width: 18rem;">
         <img class="card-img-top" src="/img/${element.name}.JPG" alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${element.name}</h5>
           <p class="card-text montsa"> House Characteristics:</p>
         
         
       
         <ul class="list-group">
           <li class="list-group-item montsa">Mascot : ${element.mascot}</li>
           <li class="list-group-item montsa">Head of House : ${element.headOfHouse}</li>
           <li class="list-group-item montsa">House Ghost : ${element.houseGhost}</li>
           <li class="list-group-item montsa">House Founder : ${element.founder}</li>
           <li class="list-group-item montsa">House School : ${element.school}</li>
         </ul>
           
         </div>
         </div>
       </div>`;
     });
     houses.innerHTML= cards;
}
getCharacters();
getSpells();
getHouses();


// console.log(housesList);
// console.log(spellsList);
// console.log(housesList);

searchHouseList = []
searchSpellList = []
searchCharacterList = []
const searchHouses = (text) => {
    let matches = housesList.filter(house => {
        const regex = new RegExp(`^${text}`, "gi");
        return house.name.match(regex);
    });
    if(text.length ===0){
        matches = housesList;
    }
    // console.log(matches);
  const uniqueArray = matches.filter(function(item, pos) {
    return matches.indexOf(item) == pos;
});
// console.log(uniqueArray);
showHouses(uniqueArray);
}

const searchSpells = (text) => {
    let matches = spellsList.filter(spell => {
        const regex = new RegExp(`^${text}`, "gi");
        return spell.spell.match(regex);
    });
    if(text.length ===0){
        matches = spellsList;
    }
    // console.log(matches);
  const uniqueArray = matches.filter(function(item, pos) {
    return matches.indexOf(item) == pos;
});
// console.log(uniqueArray);
showSpells(uniqueArray);
}


const searchCharacters = (text) => {
    let matches = charactersList.filter(character => {
        const regex = new RegExp(`^${text}`, "gi");
        return character.name.match(regex);
    });
    if(text.length ===0){
        matches = charactersList;
    }
    // console.log(matches);
  const uniqueArray = matches.filter(function(item, pos) {
    return matches.indexOf(item) == pos;
});
// console.log(uniqueArray);
showCharacters(uniqueArray);
}











