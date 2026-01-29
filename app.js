'use script'
//всплывающее меню фильтров "найти" НЕРАБОТАЕТ
let listok = document.querySelector('.list')
let naiti = document.querySelector(".filtr");
let rod=document.querySelector('.roditel')
    let fam=document.querySelector('.familly')
    let sch=document.querySelector('.school_people')
    let fr=document.querySelector('.friend')
    let m=document.querySelector('.man')
    let w=document.querySelector('.woman')
    rod.style.display="none"
    fam.style.display="none"
    sch.style.display="none"
    fr.style.display="none"
    m.style.display="none"
    w.style.display="none"
naiti.addEventListener('click', function(event){
    if(rod.style.display=="none"){
    listok.style.margin="80px 0px 20px 50px"
    rod.style.display="block"
    fam.style.display="block"
    sch.style.display="block"
    fr.style.display="block"
    m.style.display="block"
    w.style.display="block"}
    else{
    rod.style.display="none"
    fam.style.display="none"
    sch.style.display="none"
    fr.style.display="none"
    m.style.display="none"
    w.style.display="none"
    listok.style.margin="20px 0px 20px 50px"
    }
})
let nastro = document.querySelector('.nast')
let creat= document.querySelector('.create')
let server= document.querySelector('.serv')
creat.style.display="none"
server.style.display="none"
nastro.addEventListener('click', function(event){
    if(creat.style.display=="none"){
    creat.style.display="block"
    server.style.display="block"
    }
    else{
    creat.style.display="none"
    server.style.display="none"
    }
})
let spisok = document.querySelectorAll('.box')

//фильтры из "найти" (выделение) РАБОТАЕТ
let roditeli = document.querySelector(".roditel")
roditeli.addEventListener('click', function(event){
    for (let index = 0; index < spisok.length; index++) {
        spisok[index].style.border = 'none'
    }
    let masiv_roditeli=[0,1]
    for (let index = 0; index < masiv_roditeli.length; index++) {
        spisok[masiv_roditeli[index]].style.border = 'solid 2px red'
    }
})
let family = document.querySelector(".familly")
family.addEventListener('click', function(event){
    for (let index = 0; index < spisok.length; index++) {
        spisok[index].style.border = 'none'
    }
    let masiv_family=[0,1,2,3]
    for (let index = 0; index < masiv_family.length; index++) {
        spisok[masiv_family[index]].style.border = 'solid 2px red'
    }
})
let friends = document.querySelector(".friend")
friends.addEventListener('click', function(event){
    for (let index = 0; index < spisok.length; index++) {
        spisok[index].style.border = 'none'
    }
    let masiv_friends=[4,5]
    for (let index = 0; index < masiv_friends.length; index++) {
        spisok[masiv_friends[index]].style.border = 'solid 2px red'
    }
})
let school = document.querySelector(".school_people")
school.addEventListener('click', function(event){
    for (let index = 0; index < spisok.length; index++) {
        spisok[index].style.border = 'none'
    }
    let masiv_school=[4,5,6]
    for (let index = 0; index < masiv_school.length; index++) {
        spisok[masiv_school[index]].style.border = 'solid 2px red'
    }
})
let pol_mush = document.querySelector(".man")
pol_mush.addEventListener('click', function(event){
    for (let index = 0; index < spisok.length; index++) {
        spisok[index].style.border = 'none'
    }
    let masiv_pol_mush=[1,2,3,4,5]
    for (let index = 0; index < masiv_pol_mush.length; index++) {
        spisok[masiv_pol_mush[index]].style.border = 'solid 2px red'
    }
})


//Создание формы РАБОТАЕТ
let contact = document.querySelector(".create")
contact.addEventListener('click', function(event){
    createList()
})
function createList(){
    let main = document.querySelector('.create_list')
    main.style.display='block'
    main.style.width='auto'
    main.style.height='80%'
    main.style.backgroundColor='rgb(148, 127, 242)'
    main.style.padding='10px'
    main.style.borderRadius='8px'
    let btn1=document.querySelector('.otpravka')
    btn1.addEventListener('click', function() {
        let nameUser=document.querySelector('.name_user')
        let whoUser=document.querySelector('.who_user')
        let nomerUser=document.querySelector('#nomer')
        if(nameUser.value && whoUser.value && nomerUser.value){
        const contactContainer = document.createElement('div')
        contactContainer.classList.add('box')
        const contactImg = document.createElement('img')
        contactImg.src="avatar.png"
        const contactBox = document.createElement('div')
        contactBox.classList.add('box_write')
        const contacName = document.createElement('h2')
        contacName.innerText = contName.value
        const contacPhone = document.createElement('p')
        contacPhone.innerText = nomer.value
        let main = document.querySelector('.create_list')
        main.style.display='none'
        contactContainer.appendChild(contactImg)
        contactBox.appendChild(contacName)
        contactBox.appendChild(contacPhone)
        contactContainer.appendChild(contactBox)
        contSec.appendChild(contactContainer)
        otprav()
        servers()
    }else{
        let oshibka =document.createElement("p")
        oshibka.innerText="⚠️Не все поля заполнены!"
        main.append(oshibka)
        oshibka.style.color="yellow"
    }
    })
}




let apiUrl = 'http://web4.informatics.ru:82/api/a5185716a48d3e6f3f917f93a2eb1d2b';
let texts = []
function otprav() {
    let elems = document.querySelectorAll("h2")
    console.log('Данные с сервера:')
    for (let i = 0; i < elems.length; i++) {
        texts[i]=elems[i].innerText
    }
    for (let i = 0; i < texts.length; i++) {
    console.log( texts[i]);}
}

function servers() {
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, false); 
    try {
        xhr.send(JSON.stringify(texts));
        
        if (xhr.status != 200) {
            console.log('Ошибка!')
        }
    } catch (error) {
        console.log('Ошибка!')
    }
}
otprav()
servers()