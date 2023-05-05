// Nhập 2 ô input
// 1 ô nhập user name
// 1 ô nhập pass
// Khi click vào nút hiện pass => hiện mật khẩu
// Ngược lại là ẩn pass

let nameEl = document.querySelector('.name');
let passwordEl = document.querySelector('.password');

let nameError = document.querySelector('.name-error');
let passwordError = document.querySelector('.pass-error');

let showPassBtn = document.querySelector('.show-pass-btn');
let loginBtn = document.querySelector('.login-btn');

showPassBtn.addEventListener('click', function () {
  let type = passwordEl.getAttribute('type'); //Lấy thuộc tính type của button Show Pas
  if (type == 'password') {
    passwordEl.setAttribute('type', 'text'); //Đổi giá trị của type từ thuộc tính password thành text
    showPassBtn.innerHTML = 'Hide Pass';
  } else {
    passwordEl.setAttribute('type', 'password');
    showPassBtn.innerHTML = 'Show Pass';
  }
});

loginBtn.addEventListener('click', function () {
  let nameValue = nameEl.value;
  let passwordValue = passwordEl.value;
  let nameErrorHtml = '';
  let passwordErrorHtml = '';

  if (nameValue && passwordValue) {
    console.log('Đã validate');
  } else {
    console.log('Chưa validate');
    if (!nameValue) {
      nameErrorHtml = 'Name Không được để trống';
    }
    if (!passwordValue) {
      passwordErrorHtml = 'Pass Không được để trống';
    }
  }
  nameError.innerHTML = nameErrorHtml;
  passwordError.innerHTML = passwordErrorHtml;
});
