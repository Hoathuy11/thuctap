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
    // Hiển thị tab được chọn nếu tồn tại
    let activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = "block";
        console.log("Tab hiển thị:", tabId);
    } else {
        console.error("Không tìm thấy tab:", tabId);
    }
    // Đánh dấu button hiện tại là active
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}
// Mặc định hiển thị tab đầu tiên khi tải trang
document.addEventListener("DOMContentLoaded", function () {
    let defaultButton = document.querySelector(".tablinks.active") || document.querySelector(".tablinks");
    if (defaultButton) {
        defaultButton.click();
    } else {
        console.error("Không tìm thấy nút tab nào để mặc định!");
    }
});


// Nút bên dưới
        document.querySelectorAll('.item').forEach(tab => {
    tab.addEventListener('click', function() {
        // Xóa trạng thái active của tất cả tab
        document.querySelectorAll('.item').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        let selectedCategory = this.dataset.target; // "all", "wood", "steel"

        document.querySelectorAll('.item-list').forEach(item => {
            if (selectedCategory === "all" || item.dataset.category === selectedCategory) {
                item.style.display = "flex"; // Hiển thị nhóm phù hợp
            } else {
                item.style.display = "none"; // Ẩn nhóm không phù hợp
            }
        });
    });
});