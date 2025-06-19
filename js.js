// FB icon 互動效果已在 CSS :hover 實現

// 返回頂部按鈕
const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
