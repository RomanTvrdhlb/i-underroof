import {
  fadeIn,
  fadeOut,
  toggleCustomClass,
} from "../functions/customFunctions";

const dataHidden = document.querySelectorAll("[data-clip]");
const citiesParent = document.querySelector("[data-content-more]");

if (dataHidden) {
  dataHidden.forEach(function (item) {
    const btn = item.querySelector("[data-clip-btn]");
    const box = item.querySelector("[data-clip-item]");

    const computedStyle = window.getComputedStyle(box);
    const originalHeight = parseInt(
      computedStyle.getPropertyValue("max-height")
    );

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const isOpen = box.getAttribute("data-clip-item") === "true";

      if (!isOpen) {
        box.style.maxHeight = box.scrollHeight + "px";
        toggleCustomClass(btn, "active");
        setTimeout(function () {
          box.style.overflow = "auto";
        }, 450);
      } else {
        box.style.maxHeight = originalHeight + "px";
        toggleCustomClass(btn, "active");
        box.style.overflow = "hidden";
      }

      box.setAttribute("data-clip-item", !isOpen);
    });

    box.style.transition = "max-height 0.4s linear";
  });
}

if (citiesParent) {
  const items = citiesParent.querySelectorAll(".about-list__item");
  const showBtn = citiesParent.parentNode.querySelector("[data-more]");

  
  let flag = false;
  items.forEach((item, index) => {
    if (index >= 3) {
      fadeOut(item, 0);

      showBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (!flag) {
          fadeIn(item, 200, "flex");
          showBtn.innerHTML = 'Hide back <span></span>';
          setTimeout(function () {
            flag = true;
          }, 1000);
        } else {
          fadeOut(item, 0);
          showBtn.innerHTML = 'Continue <span></span>';
          console.log(flag);
          setTimeout(function () {
            flag = false;
          }, 1000);
        }
      });
    }
  });
}
