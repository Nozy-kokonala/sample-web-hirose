document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const globalNav = document.querySelector(".global-nav");
  const navLinks = document.querySelectorAll(".global-nav a");
  const faqItems = document.querySelectorAll(".faq-item");

  // 画像が未配置でもプレースホルダーが見えるようにする
  document.querySelectorAll(".image-frame img").forEach(function (image) {
    if (image.complete && image.naturalWidth === 0) {
      image.style.display = "none";
    }

    image.addEventListener("error", function () {
      image.style.display = "none";
    });
  });

  if (menuButton && globalNav) {
    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.classList.toggle("is-open");
      globalNav.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.classList.remove("is-open");
        globalNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  faqItems.forEach(function (item) {
    const button = item.querySelector(".faq-question");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
});
