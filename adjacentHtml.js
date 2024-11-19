let unorderedList = document.querySelector('ul');

const arr = ['Banana', "Apple", "Watermelon","Berrys"]

for(const element of arr) {
    let ele = `<li>${element}</li>`
    unorderedList.insertAdjacentHTML('beforeend',ele)
}