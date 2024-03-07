//declare the the constances 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSelection = document.querySelectorAll(".section"),
    totlalSections = allSelection.length;



// the main Loop     
for (let i = 0; i < navList.length; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < navList.length; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}



function showSection(element) {
    for (let i = 0; i < totlalSections; i++) {
        allSelection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}





function removeBackSection() {
    for (let i = 0; i < totlalSections; i++) {
        allSelection[i].classList.remove("back-section");
    }
}





function addBackSection(num) {
    allSelection[num].classList.add("back-section");
}





const navTogglerbtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerbtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});






function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerbtn.classList.toggle("open");
    for (let i = 0; i < totlalSections; i++) {
        allSelection[i].classList.toggle("open");
    }
}

