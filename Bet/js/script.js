"use strict";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let choiceCoeffOne = document.getElementById("choiceCoeffOne");

choiceCoeffOne.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.className == "coeff") {
    let nowCheck = choiceCoeffOne.querySelector(".check");
    nowCheck.classList.remove("check");
    elem.classList.add("check");

    if (elem.textContent == "7") {
      let priceOne = document.getElementById("priceOne");
      priceOne.textContent = "1000р";
      priceOne.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%5B7%5D&OutSum=1000&SignatureValue=5cf1f8fd7a4dea210c924cf8bce0d86d";
    }

    if (elem.textContent == "9") {
      let priceOne = document.getElementById("priceOne");
      priceOne.textContent = "1200р";
      priceOne.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%5B9%5D&OutSum=1200&SignatureValue=cd438ed4ca3f94feb3f7b6cd9d8528fd";
    }

    if (elem.textContent == "12") {
      let priceOne = document.getElementById("priceOne");
      priceOne.textContent = "1500р";
      priceOne.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%5B12%5D&OutSum=1500&SignatureValue=21b4855546591a7bd5c622e8a0a6d849";
    }

    if (elem.textContent == "15") {
      let priceOne = document.getElementById("priceOne");
      priceOne.textContent = "1700р";
      priceOne.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%5B15%5D&OutSum=1700&SignatureValue=4033bedf7ea4032cb8d6a2e2b0c9a248";
    }
  }
});

let choiceCoeffTwo = document.getElementById("choiceCoeffTwo");

choiceCoeffTwo.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.className == "coeff") {
    let nowCheck = choiceCoeffTwo.querySelector(".check");
    nowCheck.classList.remove("check");
    elem.classList.add("check");

    if (elem.textContent == "1 мес.") {
      let priceTwo = document.getElementById("priceTwo");
      priceTwo.textContent = "1500р";
      priceTwo.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=VIP-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%20(%D0%BC%D0%B5%D1%81%D1%8F%D1%86)&OutSum=1500&SignatureValue=21b4855546591a7bd5c622e8a0a6d849";
    }

    if (elem.textContent == "3 мес.") {
      let priceTwo = document.getElementById("priceTwo");
      priceTwo.textContent = "2500р";
      priceTwo.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=VIP-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%20(3%20%D0%BC%D0%B5%D1%81)&OutSum=2500&SignatureValue=d7e9dd3a27380baba2163e300e36bb98";
    }

    if (elem.textContent == "Навсегда") {
      let priceTwo = document.getElementById("priceTwo");
      priceTwo.textContent = "3500р";
      priceTwo.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=VIP-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%20(%D0%9D%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0)&OutSum=3500&SignatureValue=2817c9b22710570c17f871a23dd7e132";
    }
  }
});

let choiceCoeffThree = document.getElementById("choiceCoeffThree");

choiceCoeffThree.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.className == "coeff") {
    let nowCheck = choiceCoeffThree.querySelector(".check");
    nowCheck.classList.remove("check");
    elem.classList.add("check");

    if (elem.textContent == "5 000р") {
      let priceThree = document.getElementById("priceThree");
      priceThree.textContent = "1000р";
      priceThree.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%9B%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D0%B0%20(%D0%B4%D0%BE%205%20000%D1%80)&OutSum=1000&SignatureValue=5cf1f8fd7a4dea210c924cf8bce0d86d";
    }

    if (elem.textContent == "7 000р") {
      let priceThree = document.getElementById("priceThree");
      priceThree.textContent = "1500р";
      priceThree.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%9B%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D0%B0%20(%D0%B4%D0%BE%207%20000%D1%80)&OutSum=1500&SignatureValue=21b4855546591a7bd5c622e8a0a6d849";
    }

    if (elem.textContent == "15 000р") {
      let priceThree = document.getElementById("priceThree");
      priceThree.textContent = "2000р";
      priceThree.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%9B%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D0%B0%20(%D0%B4%D0%BE%2015%20000%D1%80)&OutSum=2000&SignatureValue=1d8b86a9089f7dfb5d1673e947b489c0";
    }
  }
});

let choiceCoeffFour = document.getElementById("choiceCoeffFour");

choiceCoeffFour.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.className == "coeff") {
    let nowCheck = choiceCoeffFour.querySelector(".check");
    nowCheck.classList.remove("check");
    elem.classList.add("check");

    if (elem.textContent == "9") {
      let priceFour = document.getElementById("priceFour");
      priceFour.textContent = "1200р";
      priceFour.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%A2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D1%87%D0%B5%D1%82%20%5B9%5D&OutSum=1200&SignatureValue=cd438ed4ca3f94feb3f7b6cd9d8528fd";
    }

    if (elem.textContent == "12") {
      let priceFour = document.getElementById("priceFour");
      priceFour.textContent = "1500р";
      priceFour.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%A2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D1%87%D0%B5%D1%82%20%5B12%5D&OutSum=1500&SignatureValue=21b4855546591a7bd5c622e8a0a6d849";
    }

    if (elem.textContent == "16") {
      let priceFour = document.getElementById("priceFour");
      priceFour.textContent = "1800р";
      priceFour.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%A2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D1%87%D0%B5%D1%82%20%5B16%5D&OutSum=1800&SignatureValue=454af25dc82f03437f5ba9e7a11f1d56";
    }
  }
});

let choiceCoeffFive = document.getElementById("choiceCoeffFive");

choiceCoeffFive.addEventListener("click", (event) => {
  let elem = event.target;

  if (elem.className == "coeff") {
    let nowCheck = choiceCoeffFive.querySelector(".check");
    nowCheck.classList.remove("check");
    elem.classList.add("check");

    if (elem.textContent == "1 нед.") {
      let priceFive = document.getElementById("priceFive");
      priceFive.textContent = "900р";
      priceFive.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%91%D0%BE%D1%82%20(1%20%D0%BD%D0%B5%D0%B4.)&OutSum=900&SignatureValue=63ec91c43c1eea7cefe4a6e0ccea03d7";
    }

    if (elem.textContent == "1 мес.") {
      let priceFive = document.getElementById("priceFive");
      priceFive.textContent = "1800р";
      priceFive.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%91%D0%BE%D1%82%20(1%20%D0%BC%D0%B5%D1%81.)&OutSum=1800&SignatureValue=454af25dc82f03437f5ba9e7a11f1d56";
    }

    if (elem.textContent == "Навсегда") {
      let priceFive = document.getElementById("priceFive");
      priceFive.textContent = "2500р";
      priceFive.parentElement.href =
        "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=BestStavka&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%91%D0%BE%D1%82%20(%D0%9D%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0)&OutSum=2500&SignatureValue=d7e9dd3a27380baba2163e300e36bb98";
    }
  }
});

let questions = document.getElementById("questions");

questions.addEventListener("click", (event) => {
  let queText = event.target;

  if (
    queText.className == "queText" ||
    queText.className == "fa fa-caret-down"
  ) {
    let inv = queText.closest(".question").querySelector(".ansText");
    let arrows = queText
      .closest(".question")
      .querySelectorAll(".fa.fa-caret-down");
    inv.classList.toggle("invisible");
    for (let arrow of arrows) {
      arrow.classList.toggle("rot");
    }
  }
});

let footer = document.getElementById("footer");

footer.addEventListener("click", (event) => {
  let target = event.target;
  let mail = footer.querySelector(".home");
  let numb = footer.querySelector(".number");

  //mail
  if (target.className == "home" || target.className == "home mail") {
    if (mail) {
      target.classList.toggle("mail");
    }

    let contentMail = footer.querySelector(".mail");

    if (contentMail && target == footer.querySelector(".home")) {
      target.textContent = "beststavkaoff@mail.ru";
    }

    if (
      target == footer.querySelector(".home") &&
      !(target == footer.querySelector(".mail"))
    ) {
      target.textContent = "E-mail";
    }
  }

  //number
  if (target.className == "number" || target.className == "number visible") {
    if (numb) {
      target.classList.toggle("visible");
    }

    let contentNumb = footer.querySelector(".visible");

    if (contentNumb && target == footer.querySelector(".number")) {
      target.textContent = "+79613346326";
    }

    if (target == footer.querySelector(".number") && !(target == contentNumb)) {
      target.textContent = "Телефон";
    }
  }

  //aboutUs
  if (target.className == "aboutUs") {
    window.scrollTo(0, 100);
  }
});
