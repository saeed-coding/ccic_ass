window.onload = function () {
    // هنا بنشيك لو المستخدم مسجل الدخول
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        // لو مش مسجل، بنوجهه لصفحة تسجيل الدخول
        window.location.href = 'login.html';
    } else {
        // لو مسجل، بنعرض اسم المستخدم
        const username = localStorage.getItem('username');
        document.getElementById('usernameDisplay').textContent = username;

        // هنا بنعمل حدث عند الضغط على زر تسجيل الخروج
        document.getElementById('logoutBtn').addEventListener('click', function () {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');

            // بعد الخروج، بنوجهه لصفحة تسجيل الدخول
            window.location.href = 'login.html';
        });
    }
};
