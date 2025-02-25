document.querySelectorAll(".toggleArrow").forEach((arrow) => {
    arrow.addEventListener("click", function() {
        var parent = this.closest(".card"); // Lấy phần tử cha chứa nội dung
        var content = parent.querySelector(".content2"); // Lấy nội dung cần ẩn/hiện
        var img = this.querySelector("img"); // Lấy icon mũi tên

        if (content.classList.contains("close")) {
            content.classList.remove("close");
            img.style.transform = "rotate(0deg)";
        } else {
            content.classList.add("close");
            img.style.transform = "rotate(180deg)";
        }
    });
});