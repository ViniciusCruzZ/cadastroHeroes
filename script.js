// const cadastrar = document.querySelector('#btnCadastrar');
// const heroList = document.querySelector('.heroList')

// function powerIcon(power) {
//     // Retorna o ICON com base no poder
//     let i = document.createElement('i');
//     i.classList.add('ph');

//     if (power === 'FOGO') {
//         i.classList.add('ph-fire');
//     } else if (power === 'ÁGUA') {
//         i.classList.add('ph-drop');
//     } else if (power === 'TERRA') {
//         i.classList.add('ph-mountains');
//     } else if (power === 'AR') {
//         i.classList.add('ph-wind')
//     }

//     return i;
// }

// function createCard(name, power, gender, birth) {
//     // Cria o card e insere as informações.
//     let div = document.createElement('div');
//     let img = document.createElement('img');
//     let info = document.createElement('div');
//     let nome = document.createElement('p');
//     let poder = document.createElement('small');
//     let age = document.createElement('p');
    
//     let avatar = ''
//     if (gender === 'M') {
//         avatar = "images/man.png"
//     } else if (gender === 'F') {
//         avatar = "images/woman.png"
//     }

//     img.src = avatar
//     nome.innerText = name
//     poder.innerText = power
//     age.innerText = birth

//     info.appendChild(nome)
//     info.appendChild(poder)
//     poder.appendChild(powerIcon(power))
//     info.appendChild(age)

//     div.appendChild(img)
//     div.appendChild(info)

//     div.classList.add('hero')

//     heroList.appendChild(div)
// }

// cadastrar.addEventListener('click', function() {
//     // Aciona o evento de click para cadastrar na tela
//     let nome = document.querySelector('#fullName').value;
//     let poder = document.querySelector('#power').value;
//     let genero = document.querySelectorAll('input[name="gender"]:checked');
//     let nascimento = document.querySelector('#dateBirth').value;

//     createCard(nome, poder, genero[0].id, nascimento)
// })



// Versão Otimizada

const cadastrar = document.querySelector('#btnCadastrar');
const heroList = document.querySelector('.heroList');
const heroes = [];

function getAvatarByGender(gender) {
    return gender === 'M' ? 'images/man.png' : 'images/woman.png';
}

function createHero(name, power, gender, birth) {
    return {
        name,
        power,
        gender,
        birth
    };
}

function powerIcon(power) {
    let i = document.createElement('i');
    i.classList.add('ph');

    switch (power) {
        case 'FOGO':
            i.classList.add('ph-fire');
            break;
        case 'ÁGUA':
            i.classList.add('ph-drop');
            break;
        case 'TERRA':
            i.classList.add('ph-mountains');
            break;
        case 'AR':
            i.classList.add('ph-wind');
            break;
        default:
            i.classList.add('ph-question');
            break;
    }

    return i;
}

function createCard(hero) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let info = document.createElement('div');
    let nome = document.createElement('p');
    let poder = document.createElement('small');
    let age = document.createElement('p');

    img.src = getAvatarByGender(hero.gender);
    nome.innerText = hero.name;
    poder.innerText = hero.power;
    age.innerText = hero.birth;

    info.appendChild(nome);
    info.appendChild(poder);
    poder.appendChild(powerIcon(hero.power));
    info.appendChild(age);

    div.appendChild(img);
    div.appendChild(info);

    div.classList.add('hero');

    heroList.appendChild(div);
}

cadastrar.addEventListener('click', function () {
    let nome = document.querySelector('#fullName').value;
    let poder = document.querySelector('#power').value;
    let genero = document.querySelector('input[name="gender"]:checked');
    let nascimento = document.querySelector('#dateBirth').value;

    if (!nome || !poder || !genero || !nascimento) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let hero = createHero(nome, poder, genero.id, nascimento);
    heroes.push(hero);
    createCard(hero);
});