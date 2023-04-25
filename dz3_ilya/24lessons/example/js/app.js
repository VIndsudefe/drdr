const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

// console.log(tabs);
// console.log(tabsParent);
// console.log(tabsContent);

const handleHideTabsContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const handleShowTabsContent = (i = 0) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

handleHideTabsContent();
handleShowTabsContent();

tabsParent.addEventListener("click", (e) => {
  const target = e.target;
  //   console.log(target);

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (item === target) {
        // console.log(i);
        handleHideTabsContent();
        handleShowTabsContent(i);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenBtn = document.querySelector(".btn_white");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
