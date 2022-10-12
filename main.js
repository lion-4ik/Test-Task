const button=document.getElementById('button')
const email=document.getElementById('email')
const password=document.getElementById('password')
const modalWindow=document.querySelector('.modal')
const wrapper=document.querySelector('.wrapper')


const showText = ()=>{
    wrapper.innerHTML=''
    const p=document.createElement('h3')
    const img=document.createElement('img')
    img.src='./images/img.jpg'
    p.innerHTML='Hello user with email: '+email.value
    wrapper.append(p)
    wrapper.append(img)


}

const closeModal = ()=>{
    modalWindow.classList.remove('active')
}

const createButtons = ()=>{

    const p=document.createElement('p')
    const cancel=document.createElement('button')
    const confirm=document.createElement('button')
    const div=document.createElement('div')

    modalWindow.innerHTML=''
    p.innerHTML='Please confirm account creation for '+email.value
    confirm.innerHTML='confirm'
    confirm.addEventListener('click', showText)
    cancel.innerHTML='cancel'
    cancel.addEventListener('click', closeModal)
    div.classList.add('buttons')

    modalWindow.append(p)
    div.append(cancel)
    div.append(confirm)
    modalWindow.append(div)
}

const showModal = (event)=>{
    event.preventDefault()
    if (email.value!=0 && password.value.length!=0) {
        createButtons()
        modalWindow.classList.add('active')
    }
}

button.addEventListener('click', showModal)