let searchResultBox;

window.onload = function () {
   const searchBar = document.querySelector("input");
   searchResultBox = document.querySelector(".search-results");
   searchBar.addEventListener("input", search);
}

const randomWords = ["Paul", "Amoah", "Maame Yaa", "Danny b", "Elon musk", "JuanMicheal"];
function search(e) {
   searchResultBox.innerHTML = "";
   let searchResultsMap = new Map();
   let value = e.target.value;
   let lastIndex = 0;
   
   if(value != "") {
      for (let i = 0; i < randomWords.length; i++) {
          let index = randomWords[i].indexOf(value);
          if(index > lastIndex) lastIndex = index;
           if (index === -1) {
              continue;
           }
          let indexString = index.toString();
          let indexString1 = indexString;
          while(searchResultsMap.has(indexString1)) {
              indexString1 += indexString;
          }
          searchResultsMap.set(indexString1, randomWords[i]);
      }
      displayResults(createOrderedArray(searchResultsMap, lastIndex));
   }   
}

function createOrderedArray(searchResultsMap, lastIndex) {
    let index = 0;
    let orderedArray = [];

    while(index <= lastIndex) {
        searchResultsMap.forEach((searchResult, key) => {
            if(key.includes(index.toString())) {
                orderedArray.push(searchResult);
            }
        })
        index++;
    }
    return orderedArray;
}

function displayResults(orderedArray) {
    orderedArray.forEach(searchResult => {
        let searchResultElement = document.createElement("div");
        searchResultElement.innerHTML = searchResult;
        searchResultBox.appendChild(searchResultElement);
    })
}