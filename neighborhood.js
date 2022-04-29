const randResBtn = document.querySelector(".random-button")

function getRandRes() {

    const restaurants = ["Tio's Restaurant", "Cupbob", "The Break"];
    var rand = restaurants[(Math.random() * myArray.length) | 0];
    console.log(rand)
    document.querySelector('.rand-res').textContent = eatHere;

}

randResBtn.addEventListener('click', getRandRes);