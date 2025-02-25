function openTab(evt, tabId) {
    console.log("Button clicked:", tabId); // Kiểm tra xem hàm có chạy không

    // Ẩn tất cả các tab
    document.querySelectorAll(".tab-head__list").forEach(tab => {
        tab.style.display = "none";
    });

    // Bỏ class active khỏi tất cả các button
    document.querySelectorAll(".tablinks").forEach(button => {
        button.classList.remove("active");
    });

    // Hiển thị tab được chọn
    let activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = "block";
        console.log("Tab hiển thị:", tabId);
    } else {
        console.error("Không tìm thấy tab:", tabId);
    }

    // Đánh dấu button hiện tại là active
    evt.currentTarget.classList.add("active");
}

// Mặc định hiển thị tab đầu tiên khi tải trang
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablinks.active").click();
});
