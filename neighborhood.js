const randResBtn = document.querySelector(".random-button")

function getRandRes() {

    const restaurants = ["Tio's Restaurant", "Cupbob", "The Break"];
    let eatHere = restaurants[(Math.random() * restaurants.length) | 0];
    document.querySelector('.rand-res').textContent = eatHere;
    console.log(eatHere);
}

randResBtn.addEventListener('click', getRandRes);