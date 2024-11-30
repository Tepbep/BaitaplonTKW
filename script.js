document.addEventListener("DOMContentLoaded", function () {
    const bannerTitle = document.getElementById("banner-title");
    const bannerDescription = document.getElementById("banner-description");
    const bannerImage = document.querySelector(".banner");

    // Mảng các bộ phim nổi bật
    const movies = [
        {
            title: " Avengers Endgame ",
            imageUrl: "endgame.jpg"
        },
        {
            title: " Batman ",
            imageUrl: "batman.jpg"
        },
        {
            title: " The Woman in Black ",
            imageUrl: "thewomaninblack.jpg"
        }
    ];

    let currentMovieIndex = 0;

    // Hàm cập nhật phim nổi bật
    function updateBanner() {
        bannerTitle.textContent = movies[currentMovieIndex].title;
        bannerDescription.textContent = movies[currentMovieIndex].description;
        bannerImage.style.backgroundImage = `url(${movies[currentMovieIndex].imageUrl})`;
    }

    // Thiết lập thay đổi phim mỗi 5 giây (5000ms)
    setInterval(function () {
        currentMovieIndex = (currentMovieIndex + 1) % movies.length; // Lặp lại mảng phim
        updateBanner();
    }, 5000);

    // Khởi tạo banner khi tải trang
    updateBanner();
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang phim lẻ đã sẵn sàng!");
});

function handleLogin(event) {
    event.preventDefault();

    // Lấy giá trị từ các ô input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản mẫu (bạn có thể kết nối với cơ sở dữ liệu ở đây)
    const validUsername = "admin";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển hướng sau khi đăng nhập thành công
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}
