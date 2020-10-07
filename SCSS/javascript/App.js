window.onload = () => {
  // Elements
  const listItems = document.querySelectorAll('.list__item');

  // Event Handlers
  listItems.forEach(element => {
    element.addEventListener("click", handleList);
  });
};

function handleList(e) {
  let listOption = e.currentTarget.className;
  let listNum = parseInt(listOption.match(/(\d+)/));
  const listTitle = document.querySelector(".info--title");
  const listDesc = document.querySelector(".info--desc");

  switch(listNum) {
    case 0:
        listTitle.textContent = "Sätt dig bakom ratten och få betalt";
        listDesc.textContent = "Kör med plattformen som har det största nätverket av aktiva passagerare.";
      break;
    case 1: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
    case 2: 
        listTitle.textContent = "Upptäck utsökt mat";
        listDesc.textContent = "Beställ leverans från dina favoritrestauranger.";
      break;
    case 3: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
    case 4: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
    case 5: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
    case 6: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
    case 7: 
        listTitle.textContent = "Beställ en resa nu";
        listDesc.textContent = "dawd";
      break;
  }
}   