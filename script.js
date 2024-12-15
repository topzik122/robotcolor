const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
    }
]

class Robot {
    constructor({id, name, username, email}) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
    }

    append(target) {
        if (typeof target === 'string'){
        target = document.querySelector(target)
       }
        target.insertAdjacentHTML('beforeend',
`
            <li class="card">
            <img class="card__avatar" src="https://robohash.org/${this.id}?size=300x300" />
            <div class="card__description">
                <h3 class="card__name">${this.name}</h3>
                <p class="card__email">${this.email}</p>
            </div>
        </li>`
        )     
    }
}

function render(users) {
   const cards = document.querySelector('.cards')
   const form = cards.firstElementChild
   cards.innerHTML = ''
   cards.append(form)
   if (users.length) {
    users.map(user => {
        let robot = new Robot(user)
        robot.append('.cards')
        

    })
   }
  
}

document.addEventListener("DOMContentLoaded", () => {
    render(users)
})

const search = document.querySelector(".search")
search.oninput = (event) => {
    let value = event.target.value.toLowerCase()
  let filteredRobots = users.filter(user => {
    return (user.name.toLowerCase().includes(event.target.value)||
      user.name.toLowerCase().includes(event.target.value)||
      user.name.toLowerCase().includes(event.target.value))
  })
  render(filteredRobots)
}


let form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    let name = event.target.name.value
    let username = event.target.username.value
    let email = event.target.email.value

    users.push({
            id: users[users.length - 1].id + 1,
            name,
            username,
            email,
        
    })

    render(users)

    event.target.name.value =''
    event.target.username.value =''
    event.target.email.value =''

}

function changecolor(){
    document.body.style.background = `
    linear-gradient(to top right, 
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}), 
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})
      `
}

const changeColorButtom = document.querySelector('.change-color')
changeColorButtom.onclick = changecolor
