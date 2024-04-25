//  Register

const formRegister = document.getElementById('form-register');
const loginForm = document.getElementById('form-login');
const submit = document.getElementById('submit');
const firstN = document.getElementById('popup2_name');
const lastN = document.getElementById('popup2_name2');

// При нажатие на кнопки Buy до регистрации до авторизации - появится окно с логином

const buttons = document.querySelectorAll('.favorites-button');

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById('popup1').classList.add('open');
    });
});

formRegister.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = firstN.value;
    const lastName = lastN.value;
    const email = formRegister.elements.email1.value;
    const password = formRegister.elements.password1.value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('visitCount', 1);

    alert('You have successfully registered!');

    // Обнуление книг

    const bookButton1 = document.querySelector('.b1');
    const bookButton2 = document.querySelector('.b2');
    const bookButton3 = document.querySelector('.b3');
    const bookButton4 = document.querySelector('.b4');
    const bookButton5 = document.querySelector('.b5');
    const bookButton6 = document.querySelector('.b6');
    const bookButton7 = document.querySelector('.b7');
    const bookButton8 = document.querySelector('.b8');
    const bookButton9 = document.querySelector('.b9');
    const bookButton10 = document.querySelector('.b10');
    const bookButton11 = document.querySelector('.b11');
    const bookButton12 = document.querySelector('.b12');
    const bookButton13 = document.querySelector('.b13');
    const bookButton14 = document.querySelector('.b14');
    const bookButton15 = document.querySelector('.b15');
    const bookButton16 = document.querySelector('.b16');

    updateBuyButtonState();

    localStorage.setItem('bookCount', 0);
    localStorage.setItem('purchasedBooks', JSON.stringify([]));

    function updateBuyButtonState() {
        const purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks')) || [];

        if (purchasedBooks.includes(book1Name)) {
            bookButton1.textContent = 'Buy';
            bookButton1.disabled = false;
            bookButton1.style.color = 'rgb(12, 12, 14)';
            bookButton1.style.backgroundColor = '#fff';
            bookButton1.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book2Name)) {
            bookButton2.textContent = 'Buy';
            bookButton2.disabled = false;
            bookButton2.style.color = 'rgb(12, 12, 14)';
            bookButton2.style.backgroundColor = '#fff';
            bookButton2.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book3Name)) {
            bookButton3.textContent = 'Buy';
            bookButton3.disabled = false;
            bookButton3.style.color = 'rgb(12, 12, 14)';
            bookButton3.style.backgroundColor = '#fff';
            bookButton3.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book4Name)) {
            bookButton4.textContent = 'Buy';
            bookButton4.disabled = false;
            bookButton4.style.color = 'rgb(12, 12, 14)';
            bookButton4.style.backgroundColor = '#fff';
            bookButton4.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book5Name)) {
            bookButton5.textContent = 'Buy';
            bookButton5.disabled = false;
            bookButton5.style.color = 'rgb(12, 12, 14)';
            bookButton5.style.backgroundColor = '#fff';
            bookButton5.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book6Name)) {
            bookButton6.textContent = 'Buy';
            bookButton6.disabled = false;
            bookButton6.style.color = 'rgb(12, 12, 14)';
            bookButton6.style.backgroundColor = '#fff';
            bookButton6.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book7Name)) {
            bookButton7.textContent = 'Buy';
            bookButton7.disabled = false;
            bookButton7.style.color = 'rgb(12, 12, 14)';
            bookButton7.style.backgroundColor = '#fff';
            bookButton7.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book8Name)) {
            bookButton8.textContent = 'Buy';
            bookButton8.disabled = false;
            bookButton8.style.color = 'rgb(12, 12, 14)';
            bookButton8.style.backgroundColor = '#fff';
            bookButton8.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book9Name)) {
            bookButton9.textContent = 'Buy';
            bookButton9.disabled = false;
            bookButton9.style.color = 'rgb(12, 12, 14)';
            bookButton9.style.backgroundColor = '#fff';
            bookButton9.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book10Name)) {
            bookButton10.textContent = 'Buy';
            bookButton10.disabled = false;
            bookButton10.style.color = 'rgb(12, 12, 14)';
            bookButton10.style.backgroundColor = '#fff';
            bookButton10.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book11Name)) {
            bookButton11.textContent = 'Buy';
            bookButton11.disabled = false;
            bookButton11.style.color = 'rgb(12, 12, 14)';
            bookButton11.style.backgroundColor = '#fff';
            bookButton11.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book12Name)) {
            bookButton12.textContent = 'Buy';
            bookButton12.disabled = false;
            bookButton12.style.color = 'rgb(12, 12, 14)';
            bookButton12.style.backgroundColor = '#fff';
            bookButton12.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book13Name)) {
            bookButton13.textContent = 'Buy';
            bookButton13.disabled = false;
            bookButton13.style.color = 'rgb(12, 12, 14)';
            bookButton13.style.backgroundColor = '#fff';
            bookButton13.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book14Name)) {
            bookButton14.textContent = 'Buy';
            bookButton14.disabled = false;
            bookButton14.style.color = 'rgb(12, 12, 14)';
            bookButton14.style.backgroundColor = '#fff';
            bookButton14.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book15Name)) {
            bookButton15.textContent = 'Buy';
            bookButton15.disabled = false;
            bookButton15.style.color = 'rgb(12, 12, 14)';
            bookButton15.style.backgroundColor = '#fff';
            bookButton15.style.border = '1px solid #0C0C0E';
        }
        if (purchasedBooks.includes(book16Name)) {
            bookButton16.textContent = 'Buy';
            bookButton16.disabled = false;
            bookButton16.style.color = 'rgb(12, 12, 14)';
            bookButton16.style.backgroundColor = '#fff';
            bookButton16.style.border = '1px solid #0C0C0E';
        }
    }
    updateBuyButtonState();

    document.getElementById('popup2').classList.remove('open')
    document.getElementById('popup1').classList.add('open')

    // После регистрации до авторизации иконка меняется на иннициалы
    const IconWithAuth = document.querySelector('.acount-header-btn');

    IconWithAuth.classList.add('.header-icon-login');
    IconWithAuth.innerHTML = `
    <button class="acount-header-btn1" id="acount-header-btn1"><p class="header-icon-text" id="header-icon-text">JD</p>
    <svg class="header-icon1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="white"/>
    </svg><div class="tooltip">John Doe</div></button>`

    // Получение инциалов из localStorage
    const sfirstName = localStorage.getItem('firstName');
    const slastName = localStorage.getItem('lastName');

    const initials = (sfirstName.charAt(0) + slastName.charAt(0)).toUpperCase();

    // Замена текста внутри <p> на инциалы
    const headerIconText = document.getElementById('header-icon-text');
    headerIconText.textContent = initials;

    const tooltip = document.querySelector('.tooltip');

    // Вставляем имя и фамилию в подсказку
    tooltip.textContent = `${firstName} ${lastName}`;

    // Замена текста подсказки на элементы span для подсветки
    const fullName = `${firstName} ${lastName}`;
    const highlightedName = `<span class="highlighted">${firstName}</span>`;
    const highlightedLastName = `<span class="highlighted">${lastName}</span>`;

    tooltip.innerHTML = fullName.replace(firstName, highlightedName).replace(lastName, highlightedLastName);

    // Генерируем девятизначный Card Number
    function generateCardNumber() {
        const randomNumber = Math.floor(Math.random() * 0x1000000000);
        return randomNumber.toString(16).toUpperCase().substring(0, 9);
    }

    const cardNumber = generateCardNumber();

    localStorage.setItem('cardNumber', cardNumber);

    // Вставляем номер карты в ДОП-меню до авторизации
    const savedCardNumber = localStorage.getItem('cardNumber');
    const dopMenuNoAuth = document.getElementById('dop-menu-noauth-h');
    dopMenuNoAuth.textContent = savedCardNumber;
    dopMenuNoAuth.style.color = '#BB945F';
    dopMenuNoAuth.style.fontSize = '11px';

    // При нажатие на кнопки Buy после регистрации до авторизации - появится окно с логином
    const buttons = document.querySelectorAll('.favorites-button');

    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('popup1').classList.add('open');
        });
    });

    // Счетчик визитов POPUP My Profile

    localStorage.setItem('visitCount', 0);
    const visitCountElement = document.getElementById('visit-count');

    if (visitCountElement) {
        visitCountElement.textContent = 1;
    }

    let visitCount = localStorage.getItem('visitCount');

    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    localStorage.setItem('visitCount', visitCount);

    if (visitCountElement) {
        visitCountElement.textContent = visitCount;
    }

    // Счетчик визитов на странице

    const visitCountElement1 = document.getElementById('visit-count1');

    if (visitCountElement1) {
        visitCountElement1.textContent = visitCount;
    }
});

//  Login

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const dopMenuWithAuth = document.querySelector('.dop-menu-noauth');
    const IconWithAuth = document.querySelector('.acount-header-btn');

    // Если пользователь авторизовался
    if (email === savedEmail && password === savedPassword) {
        alert('Successful authorization!');
        document.getElementById('popup1').classList.remove('open');

        IconWithAuth.classList.add('.header-icon-login');
        IconWithAuth.innerHTML = `
        <button class="acount-header-btn1" id="acount-header-btn1"><p class="header-icon-text" id="header-icon-text">JD</p>
        <svg class="header-icon1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="white"/>
        </svg><div class="tooltip">John Doe</div></button>`

        // Получение инциалов из localStorage
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');

        const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();

        // Замена текста внутри <p> на инциалы
        const headerIconText = document.getElementById('header-icon-text');
        headerIconText.textContent = initials;

        const tooltip = document.querySelector('.tooltip');

        // Вставляем имя и фамилию в подсказку
        tooltip.textContent = `${firstName} ${lastName}`;

        // Замена текста подсказки на элементы span для подсветки
        const fullName = `${firstName} ${lastName}`;
        const highlightedName = `<span class="highlighted">${firstName}</span>`;
        const highlightedLastName = `<span class="highlighted">${lastName}</span>`;

        tooltip.innerHTML = fullName.replace(firstName, highlightedName).replace(lastName, highlightedLastName);

        dopMenuWithAuth.classList.add('.dop-menu-withauth');
        dopMenuWithAuth.innerHTML = `
        <ul class="acount-header-list">
        <li class="dop-menu-noauth-h" id="dop-menu-noauth-h1">Profile</li><hr class="dop-menu-line">
        <li class="dop-menu-noauth-p"><button class="dop-menu-noauth-btn" id="dop-menu-with-btn"><a href="#popup" class="dop-menu-noauth-link">My profile</a></button></li>
        <li class="dop-menu-noauth-p"><button class="dop-menu-noauth-btn" id="dop-menu-with-btn1"><a href="##" class="dop-menu-noauth-link">Log Out</a></button></li></ul>`

        // Вставляем номер карты в ДОП-меню после авторизации
        const savedCardNumber = localStorage.getItem('cardNumber');
        const dopMenuNoAuth = document.getElementById('dop-menu-noauth-h1');
        dopMenuNoAuth.textContent = savedCardNumber;
        dopMenuNoAuth.style.color = '#BB945F';
        dopMenuNoAuth.style.fontSize = '11px';

        const cardNumberCode = document.getElementById('card_number_code');
        cardNumberCode.textContent = savedCardNumber;

        // Open POPUP - MY Profile

        document.getElementById('dop-menu-with-btn').addEventListener("click", function() {
            document.getElementById('popup').classList.add('open')
        });
        document.getElementById('popup_close_btn').addEventListener("click", function() {
            document.getElementById('popup').classList.remove('open')
        })
        document.querySelector('#popup .popup_content').addEventListener("click", event => {
            event._isClickWithInPopup = true;
        });
        document.querySelector('#popup .popup_sidebar').addEventListener("click", event => {
            event._isClickWithInPopup = true;
        });
        document.getElementById('popup').addEventListener("click", event => {
            if (event._isClickWithInPopup) return;
            event.currentTarget.classList.remove('open');
        });
        document.querySelectorAll(".dop-menu-noauth-link").forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".acount-header").classList.remove("open")
            });
        });

        if (email === savedEmail && password === savedPassword) {

            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('lastName');

            const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();

            // Замена иннициалов внутри POPUP My Profile
            const rectanglModalText = document.getElementById('rectangle_modal_text');
            rectanglModalText.textContent = initials;

            // Замена имени в POPUP My profile
            const firstLastName = `${firstName} ${lastName}`;
            const rectanglModalText2 = document.getElementById('rectangle_modal_text2');
            rectanglModalText2.textContent = firstLastName;
        }

        const buttons = document.querySelectorAll('.favorites-button');

        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                document.getElementById('popup1').classList.remove('open');
            });
        });

        // Open POPUP3 Buy a card

        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                document.getElementById('popup3').classList.add('open');
            });
        });
        document.getElementById('popup_buy_close_btn').addEventListener("click", function() {
            document.getElementById('popup3').classList.remove('open')
        });
        document.querySelector('#popup3 .popup_modal_card_header').addEventListener("click", event => {
            event._isClickWithInPopup = true;
        });
        document.querySelector('#popup3 .popup_modal_card').addEventListener("click", event => {
            event._isClickWithInPopup = true;
        });
        document.getElementById('popup3').addEventListener("click", event => {
            if (event._isClickWithInPopup) return;
            event.currentTarget.classList.remove('open');
        });

        // Счетчик визитов POPUP My Profile

        let visitCount = localStorage.getItem('visitCount');

        if (visitCount === null) {
            visitCount = 1;
        } else {
            visitCount = parseInt(visitCount) + 1;
        }

        localStorage.setItem('visitCount', visitCount);

        const visitCountElement = document.getElementById('visit-count');
        if (visitCountElement) {
            visitCountElement.textContent = visitCount;
        }

        // Счетчик визитов на странице

        const visitCountElement1 = document.getElementById('visit-count1');
        if (visitCountElement1) {
            visitCountElement1.textContent = visitCount;
        }

        //  После авторизации меняем Digital

        document.getElementById('library-card').classList.add("open");
        document.getElementById('library-card1').classList.add("open");

        document.getElementById('dop-menu-with-btn1').addEventListener("click", function() {
            document.getElementById('library-card').classList.remove('open')
        });

        if (email === savedEmail && password === savedPassword) {
            const nameInput = document.getElementById('digital_input_name');
            const numberInput = document.getElementById('digital_input_number');

            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('lastName');
            const cardNumber = localStorage.getItem('cardNumber');

            if (firstName) {
                nameInput.placeholder = firstName + ' ' + lastName;
            }
            if (cardNumber) {
                numberInput.placeholder = cardNumber;
            }
        }

        // При нажатии на кнопку Profile in Digital section

        document.getElementById('get-a-card-button2').addEventListener("click", function() {
            document.getElementById('popup').classList.add('open')
        });

        // Log Out
        document.getElementById('dop-menu-with-btn1').addEventListener('click', () => {

            // Измените содержимое элемента
            dopMenuWithAuth.innerHTML = `<ul class="acount-header-list">
            <li class="dop-menu-noauth-h" id="dop-menu-noauth-h">Profile</li><hr class="dop-menu-line">
            <li class="dop-menu-noauth-p"><button class="dop-menu-noauth-btn" id="dop-menu-noauth-btn"><a href="#popup1" class="dop-menu-noauth-link popup1-link">Log In</a></button></li>
            <li class="dop-menu-noauth-p"><button class="dop-menu-noauth-btn" id="dop-menu-noauth-btn1"><a href="#popup2" class="dop-menu-noauth-link">Register</a></button>
            </li></ul>`;

            // Вставляем номер карты в ДОП-меню после авторизации
            const savedCardNumber = localStorage.getItem('cardNumber');
            const dopMenuNoAuthx = document.getElementById('dop-menu-noauth-h');
            dopMenuNoAuthx.textContent = savedCardNumber;
            dopMenuNoAuthx.style.color = '#BB945F';
            dopMenuNoAuthx.style.fontSize = '11px';

            document.getElementById('dop-menu-noauth-btn').addEventListener("click", function() {
                document.getElementById('popup1').classList.add('open')
            });
            document.getElementById('dop-menu-noauth-btn1').addEventListener("click", function() {
                document.getElementById('popup2').classList.add('open')
            });
            document.querySelectorAll(".dop-menu-noauth-link").forEach(link => {
                link.addEventListener("click", () => {
                    document.querySelector(".acount-header").classList.remove("open")
                });
            });

            // При нажатие на кнопки Buy после логаут - появится окно с логином
            const buttons = document.querySelectorAll('.favorites-button');

            buttons.forEach(function(button) {
                button.addEventListener("click", function() {
                    document.getElementById('popup1').classList.add('open');
                    document.getElementById('popup3').classList.remove('open');
                });
            });
            // Поведение страници Digital после логаута

            document.getElementById('library-card').classList.remove('open');
            document.getElementById('library-card1').classList.remove('open');

            //  При нажатии на логаут плейсхолдер возвращается в состояние ввода

            const nameInput = document.getElementById('digital_input_name');
            const numberInput = document.getElementById('digital_input_number');
            nameInput.placeholder = "Reader's name";
            numberInput.placeholder = "Card number";

            // Отображение кол книг в POPUP My Profile После логаута обновляются количество купленных книг

            let bookCount = localStorage.getItem('bookCount') || 0;
            const bookCountElement = document.getElementById('cards_profile_number');
            const bookCountElement1 = document.getElementById('card-body-text');

            bookCountElement.textContent = bookCount;
            bookCountElement1.textContent = bookCount;
        });
    } else {
     alert('Authorisation Error! \nCheck the correctness of the filled data \n or \nYou are not registered!');
    }
})

// Заполнение формы на 10 сек
document.addEventListener("DOMContentLoaded", function() {

    const cardBodyButton = document.getElementById('card-body-button');
    const digitalLibraryCards = document.querySelector(".digital-library-cards");
    const formDigital = document.getElementById('input-text-number');

    cardBodyButton.addEventListener('click', function(event) {
        event.preventDefault();

        const digitalInputName = document.querySelector('#digital_input_name').value;
        const digitalInputNumber = document.querySelector('#digital_input_number').value;

        const savedCardNumber = localStorage.getItem('cardNumber');
        const sfirstName = localStorage.getItem('firstName');
        const slastName = localStorage.getItem('lastName');

        if (digitalInputNumber === savedCardNumber && (digitalInputName === sfirstName || digitalInputName === slastName)) {
            digitalLibraryCards.classList.add("open");
            setTimeout(function() {
                digitalLibraryCards.classList.remove("open");
                formDigital.reset();
            }, 10000);
        }
    });
});

// Скопировать номера карты в My Profile popup

document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.querySelector('.modal_svg');
    const cardCodeElement = document.getElementById('card_number_code');

    copyButton.addEventListener('click', function() {
        const cardCodeText = cardCodeElement.textContent;
        const tempInput = document.createElement('input');
        tempInput.value = cardCodeText;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        alert('The card code has been copied to the clipboard!');
    });
});

// Bank card number 16 numbers, expiration code- 2 numbers and CVC- 3 numbers

document.addEventListener("DOMContentLoaded", function() {
    const cardNumberInput = document.getElementById('popup3_number');
    const cardForm = document.getElementById('form_login_buy');

    cardNumberInput.addEventListener('input', function(event) {
        const popup3Number = this.value.replace(/\D/g, '');
        const formattedCardNumber = popup3Number.replace(/(\d{4})/g, '$1 ');

        this.value = formattedCardNumber.trim();

        if (this.value.length > 19) {
            this.value = this.value.substring(0, 19);
        }
    });

    cardForm.addEventListener('submit', function(event) {
        const cardNumber = cardNumberInput.value.replace(/\D/g, '');
        if (cardNumber.length !== 16) {
            alert('The card number must contain exactly 16 digits!');
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cvcInput = document.getElementById('popup3_password');
    const errorMessage = document.getElementById('error-message');

    cvcInput.addEventListener('input', function() {
        const cvcValue = cvcInput.value.trim();
        const cvcPattern = /^[0-9]{3}$/;

        if (cvcPattern.test(cvcValue)) {
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = 'CVC must have 3 digits!';
        }
    });

    const cvcForm = document.getElementById('form_login_buy');

    cvcForm.addEventListener('submit', function(event) {
        const cvcValue = cvcInput.value.trim();
        const cvcPattern = /^[0-9]{3}$/;

        if (!cvcPattern.test(cvcValue)) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const monthInput = document.getElementById('popup3_number3');
    const yearInput = document.getElementById('popup3_number33');
    const submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', function(event) {
        if (monthInput.value.length !== 2 || yearInput.value.length !== 2) {
            alert('Enter exactly two digits in each expiration field!');
            event.preventDefault();
        }
    });
});

document.getElementById('submit-btn').addEventListener("click", function() {
    const input1 = document.getElementById('popup3_number').value;
    const input2 = document.getElementById('popup3_number3').value;
    const input3 = document.getElementById('popup3_number33').value;
    const input4 = document.getElementById('popup3_password').value;
    const input5 = document.getElementById('popup3_text').value;
    const input6 = document.getElementById('number').value;
    const input7 = document.getElementById('popup3_text3').value;

    if (input1 && input2 && input3 && input4 && input5 && input6 && input7) {
        document.getElementById('popup3').classList.remove('open');
    } else {
        alert('Complete all fields before closing!');
    }
});

// Покупка книг Favorites
const bookButton1 = document.querySelector('.b1');
const book1Name = document.querySelector('.first-book-text').textContent;

const bookButton2 = document.querySelector('.b2');
const book2Name = document.querySelector('.second-book-text').textContent;

const bookButton3 = document.querySelector('.b3');
const book3Name = document.querySelector('.third-book-text').textContent;

const bookButton4 = document.querySelector('.b4');
const book4Name = document.querySelector('.fourth-book-text').textContent;

const bookButton5 = document.querySelector('.b5');
const book5Name = document.getElementById('f1').textContent;

const bookButton6 = document.querySelector('.b6');
const book6Name = document.getElementById('f2').textContent;

const bookButton7 = document.querySelector('.b7');
const book7Name = document.getElementById('f3').textContent;

const bookButton8 = document.querySelector('.b8');
const book8Name = document.getElementById('f4').textContent;

const bookButton9 = document.querySelector('.b9');
const book9Name = document.getElementById('f5').textContent;

const bookButton10 = document.querySelector('.b10');
const book10Name = document.getElementById('f6').textContent;

const bookButton11 = document.querySelector('.b11');
const book11Name = document.getElementById('f7').textContent;

const bookButton12 = document.querySelector('.b12');
const book12Name = document.getElementById('f8').textContent;

const bookButton13 = document.querySelector('.b13');
const book13Name = document.getElementById('f9').textContent;

const bookButton14 = document.querySelector('.b14');
const book14Name = document.getElementById('f10').textContent;

const bookButton15 = document.querySelector('.b15');
const book15Name = document.getElementById('f11').textContent;

const bookButton16 = document.querySelector('.b16');
const book16Name = document.getElementById('f12').textContent;

const modal = document.getElementById('popup3');

let bookCount = localStorage.getItem('bookCount') || 0;

// Обновляем состояние кнопок Buy на странице книги
function updateBuyButtonState() {
    const purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks')) || [];

    if (purchasedBooks.includes(book1Name)) {
        bookButton1.textContent = 'Own';
        bookButton1.disabled = true;
    }

    if (purchasedBooks.includes(book2Name)) {
        bookButton2.textContent = 'Own';
        bookButton2.disabled = true;
    }

    if (purchasedBooks.includes(book3Name)) {
        bookButton3.textContent = 'Own';
        bookButton3.disabled = true;
    }

    if (purchasedBooks.includes(book4Name)) {
        bookButton4.textContent = 'Own';
        bookButton4.disabled = true;
    }

    if (purchasedBooks.includes(book5Name)) {
        bookButton5.textContent = 'Own';
        bookButton5.disabled = true;
    }

    if (purchasedBooks.includes(book6Name)) {
        bookButton6.textContent = 'Own';
        bookButton6.disabled = true;
    }

    if (purchasedBooks.includes(book7Name)) {
        bookButton7.textContent = 'Own';
        bookButton7.disabled = true;
    }

    if (purchasedBooks.includes(book8Name)) {
        bookButton8.textContent = 'Own';
        bookButton8.disabled = true;
    }

    if (purchasedBooks.includes(book9Name)) {
        bookButton9.textContent = 'Own';
        bookButton9.disabled = true;
    }

    if (purchasedBooks.includes(book10Name)) {
        bookButton10.textContent = 'Own';
        bookButton10.disabled = true;
    }

    if (purchasedBooks.includes(book11Name)) {
        bookButton11.textContent = 'Own';
        bookButton11.disabled = true;
    }

    if (purchasedBooks.includes(book12Name)) {
        bookButton12.textContent = 'Own';
        bookButton12.disabled = true;
    }

    if (purchasedBooks.includes(book13Name)) {
        bookButton13.textContent = 'Own';
        bookButton13.disabled = true;
    }

    if (purchasedBooks.includes(book14Name)) {
        bookButton14.textContent = 'Own';
        bookButton14.disabled = true;
    }

    if (purchasedBooks.includes(book15Name)) {
        bookButton15.textContent = 'Own';
        bookButton15.disabled = true;
    }

    if (purchasedBooks.includes(book16Name)) {
        bookButton16.textContent = 'Own';
        bookButton16.disabled = true;
    }
}

updateBuyButtonState();

// Обработчик события для кнопки Buy на странице книги
bookButton1.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book1Name;
});

bookButton2.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book2Name;
});

bookButton3.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book3Name;
});

bookButton4.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book4Name;
});

bookButton5.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book5Name;
});

bookButton6.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book6Name;
});

bookButton7.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book7Name;
});

bookButton8.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book8Name;
});

bookButton9.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book9Name;
});

bookButton10.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book10Name;
});

bookButton11.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book11Name;
});

bookButton12.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book12Name;
});

bookButton13.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book13Name;
});

bookButton14.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book14Name;
});

bookButton15.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book15Name;
});

bookButton16.addEventListener('click', function() {
    modal.style.display = 'block';
    purchaseButton.dataset.bookName = book16Name;
});

const purchaseButton = document.getElementById('submit-btn');

// Обработчик события для кнопки Купить в модальном окне
purchaseButton.addEventListener('click', function() {

    const purchasedBookName = purchaseButton.dataset.bookName;

    bookCount++;
    localStorage.setItem('bookCount', bookCount);

    const purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks')) || [];
    purchasedBooks.push(purchasedBookName);
    localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));

    updateBuyButtonState();

    modal.style.display = 'none';

    // Отображение кол книг в POPUP My Profile После покупки обновляются количество купленных книг

    const bookCountElement = document.getElementById('cards_profile_number');
    const bookCountElement1 = document.getElementById('card-body-text');

    bookCountElement.textContent = bookCount;
    bookCountElement1.textContent = bookCount;

    // Отображение назв книг в POPUP My Profile После логаута обновляются количество купленных книг
    const purchasedBooksElement = document.getElementById('rented_books_text_list');

    purchasedBooksElement.innerHTML = '';

    purchasedBooks.forEach(bookName => {
        if (bookName && bookName.trim() !== "") {
            const bookItem = document.createElement('li');
            bookItem.textContent = bookName;
            purchasedBooksElement.appendChild(bookItem);
        }
    });

    if (!purchasedBooks) {
        purchasedBooks = [];
    }

    if (purchasedBookName && purchasedBookName.trim() !== "") {
        purchasedBooks.push(purchasedBookName);
    }

    if (purchasedBookName === book1Name) {
        bookButton1.style.color = '#BB945F';
        bookButton1.style.backgroundColor = '#fff';
        bookButton1.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book2Name) {
        bookButton2.style.color = '#BB945F';
        bookButton2.style.backgroundColor = '#fff';
        bookButton2.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book3Name) {
        bookButton3.style.color = '#BB945F';
        bookButton3.style.backgroundColor = '#fff';
        bookButton3.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book4Name) {
        bookButton4.style.color = '#BB945F';
        bookButton4.style.backgroundColor = '#fff';
        bookButton4.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book5Name) {
        bookButton5.style.color = '#BB945F';
        bookButton5.style.backgroundColor = '#fff';
        bookButton5.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book6Name) {
        bookButton6.style.color = '#BB945F';
        bookButton6.style.backgroundColor = '#fff';
        bookButton6.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book7Name) {
        bookButton7.style.color = '#BB945F';
        bookButton7.style.backgroundColor = '#fff';
        bookButton7.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book8Name) {
        bookButton8.style.color = '#BB945F';
        bookButton8.style.backgroundColor = '#fff';
        bookButton8.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book9Name) {
        bookButton9.style.color = '#BB945F';
        bookButton9.style.backgroundColor = '#fff';
        bookButton9.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book10Name) {
        bookButton10.style.color = '#BB945F';
        bookButton10.style.backgroundColor = '#fff';
        bookButton10.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book11Name) {
        bookButton11.style.color = '#BB945F';
        bookButton11.style.backgroundColor = '#fff';
        bookButton11.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book12Name) {
        bookButton12.style.color = '#BB945F';
        bookButton12.style.backgroundColor = '#fff';
        bookButton12.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book13Name) {
        bookButton13.style.color = '#BB945F';
        bookButton13.style.backgroundColor = '#fff';
        bookButton13.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book14Name) {
        bookButton14.style.color = '#BB945F';
        bookButton14.style.backgroundColor = '#fff';
        bookButton14.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book15Name) {
        bookButton15.style.color = '#BB945F';
        bookButton15.style.backgroundColor = '#fff';
        bookButton15.style.border = '1px solid #BB945F';
    }

    if (purchasedBookName === book16Name) {
        bookButton16.style.color = '#BB945F';
        bookButton16.style.backgroundColor = '#fff';
        bookButton16.style.border = '1px solid #BB945F';
    }
});

// Отображение кол книг в POPUP My Profile

document.addEventListener('DOMContentLoaded', function() {
    let bookCount = localStorage.getItem('bookCount') || 0;

    const bookCountElement = document.getElementById('cards_profile_number');
    const bookCountElement1 = document.getElementById('card-body-text');

    bookCountElement.textContent = bookCount;
    bookCountElement1.textContent = bookCount;
});

// Отображение назв книг в POPUP My Profile

document.addEventListener('DOMContentLoaded', function() {
    let purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks'));

    if (!purchasedBooks) {
        purchasedBooks = [];
    }

    const purchasedBookName = purchaseButton.dataset.bookName;

    if (purchasedBookName && purchasedBookName.trim() !== "") {
        purchasedBooks.push(purchasedBookName);
    }

    localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));

    const rentedBooksContainer = document.getElementById('rented_books_container');

    const rentedBooksList = document.getElementById('rented_books_text_list');

    rentedBooksList.innerHTML = '';

    purchasedBooks.forEach(bookName => {
        if (bookName && bookName.trim() !== "") {
            const bookItem = document.createElement('li');
            bookItem.textContent = bookName;
            rentedBooksList.appendChild(bookItem);
        }
    });
});