// Loader
let load = document.getElementById("loader")
setTimeout(() => {
    load.style.display = "none"
}, 2000);
// Loader section ended

// Scroll Up Button
const scrollUpBtn = document.getElementById("scrollUp")
 window.onscroll = () => {
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");   
    }
}
// End of Scroll Up Button Section

// let userProfileName = document.getElementById("userName")
// signupProfile = JSON.parse(localStorage.getItem('signupProfile'))
// userProfileName.innerHTML = signupProfile.username
// userProfile = JSON.parse(localStorage.getItem('userProfile'))
// userProfileName.innerHTML = userProfile.username

//   header border
let headerBorder = () =>{
    let border = document.getElementById("header")
         if (this.scrollY > 50){
        border.classList.add("border-b", "border-b-secondary", "-shadow-md");
    }
    else{
        border.classList.remove("border-b","border-b-secondary", '-shadow-md');
    }

}
window.addEventListener('scroll', headerBorder)
// End of Header BorderSection

// Scroll Reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300
})
  
sr.reveal(".home__image");
sr.reveal(".home__content",  { origin: "bottom" });

sr.reveal(".category__card", { interval: 300 })

sr.reveal(".promo__card-1",  { origin: "left" });
sr.reveal(".promo__card-2",  { origin: "right" });

sr.reveal(".about__img",  { origin: "bottom" });
sr.reveal(".about__content",  { origin: "top" });

sr.reveal(".menu__items",  { origin: "left" });


sr.reveal(".customer__review",  { origin: "right" });

sr.reveal(".footer");

const srrest = ScrollReveal({
    reset: true,
    origin: "top",
    distance: "120px",
    duration: "4000",
    delay: "300"
})

srrest.reveal(".cart_item", {interval: 500});

srrest.reveal(".input_card", {origin: "bottom"});
// End of Scroll reveal section

// Night Mode
let themeBtn = document.getElementById('themeBtn')
let darkMode = document.querySelector('.ri-moon-line')

if(localStorage.getItem("dark") === "true"){
    document.documentElement.classList.add("dark")
}

themeBtn.addEventListener('click', ()=> {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        
        darkMode.classList.add('ri-moon-line')
        darkMode.classList.remove('ri-sun-line')
        localStorage.setItem("dark", "false");
    } else {
        document.documentElement.classList.add('dark')
        darkMode.classList.add('ri-sun-line')
        darkMode.classList.remove('ri-moon-line') 
        localStorage.setItem("dark", "true");
    }
})

// header
const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById('closebtn')
const mobNavbar = document.getElementById('nav-menu')
const navLinks = document.querySelectorAll('.nav_link')

navLinks.forEach((link) =>
    link.addEventListener("click", () => {
        mobNavbar.classList.add('hidden')
    })
)

closebtn.addEventListener('click', () => {
    mobNavbar.classList.add("hidden")
})

hamburger.addEventListener('click', () => {
    mobNavbar.classList.remove("hidden")
    mobNavbar.sc
})

// Profile 
let profile = document.getElementById('profile')
let userBtn = document.getElementById('user-btn')
userBtn.addEventListener('click', () => {
    
    if(profile.classList.toggle('.active')){
        profile.style.display='none'
    }
    else{
        profile.style.display='block';
    }
    
})

profile.classList.toggle('.active');

userBtn.addEventListener('click', () => {
    if (profile.classList.contains('active')) {
        profile.classList.remove('active');
    } else {
        mobNavbar.classList.remove('active');
    }
})
// End of Profile Section

// Tabs for menu
let tabs = document.querySelectorAll(".tabs_wrap ul li")
let all = document.querySelectorAll(".item_wrap");
let foods = document.querySelectorAll(".food");
let beverages = document.querySelectorAll(".beverage");
let snacks = document.querySelectorAll(".snack");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        let tabValue = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display='none'
        })

        if (tabValue == "food") {
            foods.forEach(item => {
                item.style.display="block"
            })
        } 
        else if (tabValue == "beverage"){
            beverages.forEach(item =>{
                item.style.display= 'block';
            })
        }
        else if (tabValue == "snack"){
            snacks.forEach(item =>{
                item.style.display= 'block';
            })
        }
        else{
            all.forEach(item => {
                item.style.display = "block"
            })
        }

    })
    
})

// Username on Profile toggle
showUsername = () => {
    let userProfileName = document.querySelector("#userProfileName")
    signupProfile = JSON.parse(localStorage.getItem("key-xyz"))
    userProfileName.innerHTML = signupProfile.username
}

// add event listener to delete all button
let deleteAllBtn = document.getElementById("deleteall")
deleteAllBtn.addEventListener("click", () => {
    // get all cart items
    let cartItems = document.querySelectorAll(".cart_item");

    // remove all cart items
    cartItems.forEach((item) => {
        item.remove();
    });

    // update cart message
    let cartContainer = document.querySelector(".cartContainer")
    let homeBtn = document.getElementById('homeBtn')
    cartContainer.innerHTML = "Your cart is empty";
    cartContainer.style.fontSize = "3rem";
    cartContainer.style.textAlign = "center";
    deleteAllBtn.style.display = "none";
    homeBtn.style.display = "block"
    
});

// Remove cart items
const removeCartItem = (event) => {
    const cartItem = event.target.closest(".cart_item");
    cartItem.remove();
};

// Add event listener to all remove buttons
document.querySelectorAll(".remove").forEach((button) => {
button.addEventListener("click", removeCartItem);
});




// // calculate Sub Total and Grand Total
//     // Calculate subtotal
//     const calculateSubtotal = () => {
//         // Get all cart items
//         let cartItems = document.querySelectorAll(".cart_item");

//         // Calculate total price
//         let subtotal = 0;
//         cartItems.forEach((item) => {
//             let price = parseFloat(item.querySelector(".price").innerHTML);
//             let quantity = parseInt(item.querySelector(".quantity").value);
//             subtotal += price * quantity;

            
//         });

//         // Update subtotal
//         let subtotalElement = document.querySelector(".subTotal");
//         subtotalElement.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
//     };
    

















// Subtotal
// let subTotal = document.getElementById('total')
// let qty = document.getElementById('qty')
// let ctotal = document.getElementById('edit')
// let item = document.getElementById('item')
// ctotal.addEventListener('click', () => {
//     ctotal = 42*qty
//     subTotal.textContent = ctotal
// })


// menu items

// let allTab = document.getElementById('all-tab')
// let foodTab = document.getElementById('food-tab')
// let snackTab = document.getElementById('snack-tab')
// let beverageTab = document.getElementById('beverage-tab')
// let foods = document.querySelectorAll(".food");
// let beverages = document.querySelectorAll(".beverage");
// let snacks = document.querySelectorAll(".snack");
// let all = document.querySelectorAll(".item_wrap");

// allTab.addEventListener('click', () => {
    
//     all.forEach(item => {
//         item.style.display = "block"
//     })
// })

// foodTab.addEventListener('click', () => {
    
//     foods.forEach(item => {
//         item.style.display = "block"
//     })
//     beverages.forEach(item => {
//         item.style.display = "none"
//     })
//     snacks.forEach(item => {
//         item.style.display = "none"
//     })
// })

// beverageTab.addEventListener('click', () => {
    
//     beverages.forEach(item => {
//         item.style.display = "block"
//     })
//     foods.forEach(item => {
//         item.style.display = "none"
//     })
//     snacks.forEach(item => {
//         item.style.display = "none"
//     })
// })

// snackTab.addEventListener('click', () => {
    
//     snacks.forEach(item => {
//         item.style.display = "block"
//     })
//     foods.forEach(item => {
//         item.style.display = "none"
//     })
//     beverages.forEach(item => {
//         item.style.display = "none"
//     })
// })
