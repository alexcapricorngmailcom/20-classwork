let elemUl = document.querySelector('.user-list');

for(let i = 0; i < MOCK.results.length; i++) {
    let elemLi = document.createElement('li');
    elemLi.classList.add('user-list-item');
    elemUl.append(elemLi);

    let card = document.createElement('div');
    card.classList.add('card');
    elemLi.append(card);

    let cardBackground = document.createElement('div');
    cardBackground.classList.add('card-background');
    card.append(cardBackground);

    let cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('card-img-container');
    card.append(cardImgContainer);

    let cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('src', `${MOCK.results[i].picture.large}`);
    cardImg.setAttribute('alt', 'user');
    cardImgContainer.append(cardImg);

    let cardFirstname = document.createElement('p');
    cardFirstname.classList.add('card-firstname');
    cardFirstname.innerHTML = MOCK.results[i].name.first.toUpperCase();
    card.append(cardFirstname);

    let cardLastname = document.createElement('p');
    cardLastname.innerHTML = MOCK.results[i].name.last.toUpperCase();
    cardLastname.classList.add('card-lastname');
    card.append(cardLastname);

    let cardGender = document.createElement('p');
    cardGender.innerHTML = MOCK.results[i].gender.toUpperCase();
    cardGender.classList.add('card-gender');
    card.append(cardGender);

    let cardEmail = document.createElement('a');
    cardEmail.classList.add('card-email');
    cardEmail.innerHTML = MOCK.results[i].email;
    cardEmail.setAttribute('href', 'mailto: ' + `${MOCK.results[i].email}`);
    card.append(cardEmail);

    let cardMobile = document.createElement('a');
    cardMobile.classList.add('card-mobile');
    cardMobile.innerHTML = MOCK.results[i].phone;
    cardMobile.setAttribute('href', 'tel: ' + `${MOCK.results[i].phone}`);
    card.append(cardMobile);

    let cardCity = document.createElement('p');
    cardCity.innerHTML = `${MOCK.results[i].location.city.toUpperCase()},`;
    cardCity.classList.add('card-city');
    card.append(cardCity);

    let cardCountry = document.createElement('p');
    cardCountry.innerHTML = MOCK.results[i].location.country.toUpperCase();
    cardCountry.classList.add('card-country');
    card.append(cardCountry);
}









// let elemdiv = document.querySelector('.card-img-container');
// elemdiv.innerHTML = '<img class="card-img" src="`${MOCK.results[i].picture.large}`" alt="user"></img>';

// for (let i = i; i < MOCK.results.length; i++) {
//     let elemh2 = elemLi.querySelector('.card-name');
//     elemh2.innerHTML = `${MOCK.results[i].name.title} ${MOCK.results[i].name.first} ${MOCK.results[i].name.last}`
    
//     let cloneLi = elemLi.cloneNode(true);
//     elemUl.append(cloneLi);
// }

// let elemh2 = elemLi.querySelector('.card-name');
// elemh2.innerHTML = `${MOCK.results[i].name.title} ${MOCK.results[i].name.first} ${MOCK.results[i].name.last}`