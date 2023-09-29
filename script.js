let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

let nav = document.querySelectorAll('.nav-btn')

nav.forEach(btn => {
    
    btn.addEventListener('click', function() {
        nav.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
        
    })

    
    
});

/* PLANT-CAROUSEL SCRIPTS */
const carouselPlant = document.querySelector('.carouselngPlant');
const wrapper = document.querySelector('.wrapper-plant');
const arrowBtns = document.querySelectorAll('.wrapper-plant i');
const firstCardWidth = carouselPlant.querySelector('.card').offsetWidth;
const carouselPlantChildrens = [...carouselPlant.children]
console.log(carouselPlantChildrens)


let isDragging = false ,startX, startScrollLeft, timeoutId, timeoutIdZomb;

let cardPerView = Math.round(carouselPlant.offsetWidth / firstCardWidth)

/* insert card copies at beginning */
carouselPlantChildrens.slice(-cardPerView).reverse().forEach(card => {
    carouselPlant.insertAdjacentHTML('afterbegin', card.outerHTML)
})

/* insert card copies at end */
carouselPlantChildrens.slice(0, cardPerView).forEach(card => {
    carouselPlant.insertAdjacentHTML('beforeend', card.outerHTML)
})

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carouselPlant.scrollLeft += btn.id === "left" ? -firstCardWidth :firstCardWidth
    })
})

const dragStart = (e) => {
    isDragging = true
    carouselPlant.classList.add('dragging')

    /* records initial position of cursor and scroll position of the carousel */
    startX = e.pageX
    startScrollLeft = carouselPlant.scrollLeft
}

const dragging = (e) => {
    if (!isDragging) return
    /* updates scroll position of the carousel based on the cursor movement */
    carouselPlant.scrollLeft = startScrollLeft - (e.pageX - startX)
    
}

const dragStop = () => {
    isDragging = false
    carouselPlant.classList.remove('dragging')
    
}

const autoPlay = () => {
    if (window.innerWidth < 800) return

    timeoutId = setTimeout(() => carouselPlant.scrollLeft += firstCardWidth, 2500)
}



const infiniteScroll = () => {
    if (carouselPlant.scrollLeft === 0) {
        console.log('leftend')
        carouselPlant.classList.add('no-transition')
        carouselPlant.scrollLeft = carouselPlant.scrollWidth - (2* carouselPlant.offsetWidth)
        carouselPlant.classList.remove('no-transition')
    } 
    /* else if (carouselPlant.scrollLeft + carouselPlant.offsetWidth >= carouselPlant.scrollWidth) */

    else if (Math.ceil(carouselPlant.scrollLeft) === carouselPlant.scrollWidth - carouselPlant.offsetWidth || carouselPlant.scrollLeft + carouselPlant.offsetWidth >= carouselPlant.scrollWidth) {
        carouselPlant.classList.add('no-transition')
        console.log('righttend')
        carouselPlant.scrollLeft = carouselPlant.offsetWidth
        carouselPlant.classList.remove('no-transition')
    }

    clearTimeout(timeoutId)
    if(!wrapper.matches(':hover')) autoPlay();
}


carouselPlant.addEventListener('mousemove' , dragging)
carouselPlant.addEventListener('mousedown' , dragStart)

/* mouse release events for carousel */
carouselPlant.addEventListener('mouseup' , dragStop)
carouselPlant.addEventListener('moouseleave', dragStop)


/* mouse release events for body */
document.addEventListener('mouseup' , dragStop)


carouselPlant.addEventListener('scroll', infiniteScroll)
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
wrapper.addEventListener('mouseleave', autoPlay)











/* ZOMBIE CAROUSEL SCRIPTS */


const carouselZomb= document.querySelector('.carouselngZomb');
const wrapperZomb = document.querySelector('.wrapper-zomb');
const zombarrowBtns = document.querySelectorAll('.wrapper-zomb i');
const carouselZombChildrens = [...carouselZomb.children]
console.log(carouselZombChildrens)





/* insert card copies at beginning */
carouselZombChildrens.slice(-cardPerView).reverse().forEach(card => {
    carouselZomb.insertAdjacentHTML('afterbegin', card.outerHTML)
})

/* insert card copies at end */
carouselZombChildrens.slice(0, cardPerView).forEach(card => {
    carouselZomb.insertAdjacentHTML('beforeend', card.outerHTML)
})

zombarrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carouselZomb.scrollLeft += btn.id === "left" ? -firstCardWidth :firstCardWidth
    })
})

const autoPlayZomb = () => {
    if (window.innerWidth < 800) return

    timeoutIdZomb = setTimeout(() => carouselZomb.scrollLeft += firstCardWidth, 2500)
}


const ZombieInfiniteScroll = () => {
    if (carouselZomb.scrollLeft === 0) {
        console.log('leftend')
        carouselZomb.classList.add('no-transition')
        carouselZomb.scrollLeft = carouselZomb.scrollWidth - (2* carouselZomb.offsetWidth)
        carouselZomb.classList.remove('no-transition')
    } 
    /* else if (carouselZomb.scrollLeft + carouselZomb.offsetWidth >= carouselZomb.scrollWidth) */

    else if (Math.ceil(carouselZomb.scrollLeft) === carouselZomb.scrollWidth - carouselZomb.offsetWidth || carouselZomb.scrollLeft + carouselZomb.offsetWidth >= carouselZomb.scrollWidth)    {
        carouselZomb.classList.add('no-transition')
        console.log('righttend')
        carouselZomb.scrollLeft = carouselZomb.offsetWidth
        carouselZomb.classList.remove('no-transition')
    }

    clearTimeout(timeoutIdZomb)
    if(!wrapperZomb.matches(':hover')) autoPlayZomb();
}

const dragStartZomb = (e) => {
    isDragging = true
    carouselZomb.classList.add('dragging')

    /* records initial position of cursor and scroll position of the carousel */
    startX = e.pageX
    startScrollLeft = carouselZomb.scrollLeft
}

const draggingZomb = (e) => {
    if (!isDragging) return
    /* updates scroll position of the carousel based on the cursor movement */
    carouselZomb.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStopZomb = () => {
    isDragging = false
    carouselZomb.classList.remove('dragging')
}






carouselZomb.addEventListener('mousemove' , draggingZomb)
carouselZomb.addEventListener('mousedown' , dragStartZomb)

/* mouse release events for carousel */
carouselZomb.addEventListener('mouseup' , dragStopZomb)
carouselZomb.addEventListener('moouseleave', dragStopZomb)


/* mouse release events for body */
document.addEventListener('mouseup' , dragStopZomb)


carouselZomb.addEventListener('scroll', ZombieInfiniteScroll)
wrapperZomb.addEventListener('mouseenter', () => clearTimeout(timeoutIdZomb))
wrapperZomb.addEventListener('mouseleave', autoPlayZomb)

/* Plant Preview Scripts */
let previewContainer = document.querySelector('.preview')
let previewBox = document.querySelectorAll('.plant-preview')

document.querySelectorAll('.carouselngplant .card').forEach(plant => {
    plant.onclick= () => {
        previewContainer.style.display = 'flex'
        let name = plant.getAttribute('data-name')
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target')
            if (name == target){
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none'
    }
})

/* Zombie preview Scripts */
let previewContainerZomb = document.querySelector('.previewZomb')
let previewBoxZomb = document.querySelectorAll('.zombie-preview')

document.querySelectorAll('.carouselngZomb .card').forEach(zombie => {
    zombie.onclick= () => {
        previewContainerZomb.style.display = 'flex'
        let nameZombie = zombie.getAttribute('data-name')
        previewBoxZomb.forEach(preview =>{
            let targetZomb = preview.getAttribute('data-target')
            if (nameZombie == targetZomb){
                preview.classList.add('active')
            }
        })
    }
})

previewBoxZomb.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active')
        previewContainerZomb.style.display = 'none'
    }
})






