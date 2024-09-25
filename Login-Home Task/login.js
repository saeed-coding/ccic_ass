document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // هنا بنمنع إرسال النموذج

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // هنا بنعمل تحقق بسيط لو اسم المستخدم وكلمة المرور مش فاضيين
    if (username && password) {
        // بنخزن حالة تسجيل الدخول في local storage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        // وبعدين بنوجهه لصفحة الرئيسية
        window.location.href = 'home.html';
    } else {
        alert('يرجى إدخال اسم المستخدم وكلمة المرور.');
    }
});
