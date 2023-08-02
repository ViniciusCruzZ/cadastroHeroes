const cadastrar = document.querySelector('#btnCadastrar');
const heroList = document.querySelector('.heroList')

function powerIcon(power) {
    // Retorna o ICON com base no poder
    let i = document.createElement('i');
    i.classList.add('ph');

    if (power === 'FOGO') {
        i.classList.add('ph-fire');
    } else if (power === 'ÁGUA') {
        i.classList.add('ph-drop');
    } else if (power === 'TERRA') {
        i.classList.add('ph-mountains');
    } else if (power === 'AR') {
        i.classList.add('ph-wind')
    }

    return i;
}

function createCard(name, power, gender, birth) {
    // Cria o card e insere as informações.
    let div = document.createElement('div');
    let img = document.createElement('img');
    let info = document.createElement('div');
    let nome = document.createElement('p');
    let poder = document.createElement('small');
    let age = document.createElement('p');
    
    let avatar = ''
    if (gender === 'M') {
        avatar = "images/man.png"
    } else if (gender === 'F') {
        avatar = "images/woman.png"
    }

    img.src = avatar
    nome.innerText = name
    poder.innerText = power
    age.innerText = birth

    info.appendChild(nome)
    info.appendChild(poder)
    poder.appendChild(powerIcon(power))
    info.appendChild(age)

    div.appendChild(img)
    div.appendChild(info)

    div.classList.add('hero')

    heroList.appendChild(div)
}

cadastrar.addEventListener('click', function() {
    // Aciona o evento de click para cadastrar na tela
    let nome = document.querySelector('#fullName').value;
    let poder = document.querySelector('#power').value;
    let genero = document.querySelectorAll('input[name="gender"]:checked');
    let nascimento = document.querySelector('#dateBirth').value;

    createCard(nome, poder, genero[0].id, nascimento)
})