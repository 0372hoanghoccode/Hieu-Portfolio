'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


//send mail
(function() {
  emailjs.init('KrIqtPYupZuDu3N0k'); 
})();

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  return emailPattern.test(email);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
  }

  const namePattern = /^[\p{L}\s]+$/u; 
  if (!namePattern.test(name)) {
      alert('Tên không hợp lệ!');
      return;
  }

  if (!isValidEmail(email)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ!');
      return;
  }

  if (message.length < 2) {
      alert('Hãy soạn ít nhất 2 kí tự để gửi!');
      return;
  }
//gửi mail
  emailjs.send('service_977w1cr', 'template_bywr4jw', {
      name: name,
      email: email,
      message: message
  })
  .then(function(response) {
      console.log('Email gửi thành công!', response.status, response.text);
      alert('Tin nhắn đã được gửi!');
      document.getElementById('contactForm').reset(); 
  }, function(error) {
      console.error('Lỗi khi gửi email.', error);
      alert('Gửi tin nhắn không thành công!');
  });
});

//chuyển ngữ 
// Đối tượng chứa các bản dịch Anh-Việt
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    heroTitle: "Backend Developer",
    getInTouch: "Get in touch",
    scrollDown: "Scroll down",
    cvButton: "Download CV",
    username: "Username",
        email: "Email",
        message: "Message",
        sendButton: "Send",
        namePlaceholder: "Example: Hieu Truong",
        emailPlaceholder: "Example: HieuTruong@mail.com",
        messagePlaceholder: "Write your message...",
    contactItemTitles: [
      "Address:",
      "Phone:",
      "Email:",
    ],
    sectionTitles: [
      "Third-Year Student Eager to Collaborate on Creative Projects",
      "What My Programming Skills Included?",
      "Have You Any Project? Please Drop a Message",
    ],
    sectionText: [
        "Hi! I’m Hieu Truong, currently a third-year student at SGU, specializing in backend web development with Java. I am passionate about building clean web applications with intuitive functionalities and enjoy turning ideas into reality through creative solutions. I am currently completing my personal project with the goal of becoming a full-stack developer.",
        "I develop simple, intuitive, and responsive user interfaces that help users get things done with less effort and time using those technologies.",
        "We develop the best quality websites that serve long-term. Well-documented, clean, easy, and elegant interfaces help any non-technical clients.",
        "Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible."
    ] 
  },
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    skills: "Kỹ năng",
    portfolio: "Dự án",
    contact: "Liên hệ",
    heroTitle: "Lập trình viên Backend",
    getInTouch: "Liên hệ",
    scrollDown: "Cuộn xuống",
    cvButton: "Tải CV",
    username: "Tên đăng nhập",
    email: "Email",
    message: "Tin Nhắn",
    sendButton: "Gửi",
    namePlaceholder: "Ví dụ: Hieu Truong",
    emailPlaceholder: "Ví dụ: HieuTruong@mail.com",
    messagePlaceholder: "Viết tin nhắn...",
    contactItemTitles: [
      "Địa chỉ:",
      "Điện thoại:",
      "Email:",
    ],
    sectionTitles: [
      "Sinh viên năm thứ ba nhiệt tình hợp tác vào các dự án sáng tạo",
      "Kỹ năng lập trình của tôi bao gồm những gì?",
      "Bạn có dự án nào không? Xin hãy để lại tin nhắn",
    ],
    sectionText: [
      "Chào bạn! Tôi là Hiếu Trương, hiện đang là sinh viên năm ba tại SGU, chuyên về phát triển web backend với Java. Tôi đam mê xây dựng các ứng dụng web sạch sẽ với chức năng trực quan và thích biến ý tưởng thành hiện thực thông qua các giải pháp sáng tạo. Tôi đang hoàn thành dự án cá nhân với mục tiêu trở thành lập trình viên full-stack.",
      "Tôi phát triển các giao diện người dùng đơn giản, trực quan và phản hồi nhanh giúp người dùng hoàn thành công việc với ít nỗ lực và thời gian hơn.",
      "Chúng tôi phát triển các trang web chất lượng tốt nhất phục vụ lâu dài. Giao diện được tài liệu hóa tốt, sạch sẽ, dễ dàng và thanh lịch giúp các khách hàng không chuyên cũng có thể sử dụng.",
      "Hãy liên hệ và cho tôi biết tôi có thể giúp gì cho bạn. Điền vào mẫu và tôi sẽ liên lạc với bạn sớm nhất có thể."
    ]
  }
};

// Lấy các phần tử cần chuyển ngữ
const languageSelect = document.getElementById("lang");
const navbarLinks = {
  home: document.querySelector('a[href="#home"]'),
  about: document.querySelector('a[href="#about"]'),
  skills: document.querySelector('a[href="#skills"]'),
  portfolio: document.querySelector('a[href="#portfolio"]'),
  contact: document.querySelector('a[href="#contact"]'),
};

const formLabels = {
  username: document.querySelector('label[for="name"]'),
  email: document.querySelector('label[for="email"]'),
  message: document.querySelector('label[for="message"]'),
  sendButton:  document.querySelector('button[type="submit"]'),
  nameInput: document.getElementById("name"),
  emailInput: document.getElementById("email"),
  messageInput: document.getElementById("message"),
};

 const contactItemTitles = document.querySelectorAll('.contact-item-title');

const heroTitle = document.querySelector(".hero-title"); 
const getInTouchButton = document.querySelector('.btn.btn-primary'); 
const scrollDown = document.querySelector('.scroll-down'); 
const sectionTitles = document.querySelectorAll('.section-title'); 
const cvButton = document.querySelector('.btn-group .btn.btn-primary');
const sectionText = document.querySelectorAll('.section-text'); 

// Hàm cập nhật ngôn ngữ
// Hàm cập nhật ngôn ngữ
function updateLanguage(language) {
  navbarLinks.home.textContent = translations[language].home + ".";
  navbarLinks.about.textContent = translations[language].about + ".";
  navbarLinks.skills.textContent = translations[language].skills + ".";
  navbarLinks.portfolio.textContent = translations[language].portfolio + ".";
  navbarLinks.contact.textContent = translations[language].contact + ".";

  formLabels.username.textContent = translations[language].username;
  formLabels.email.textContent = translations[language].email;
  formLabels.message.textContent = translations[language].message;
  formLabels.sendButton.textContent = translations[language].sendButton;
  
  formLabels.nameInput.placeholder = translations[language].namePlaceholder;
  formLabels.emailInput.placeholder = translations[language].emailPlaceholder;
  formLabels.messageInput.placeholder = translations[language].messagePlaceholder;

  heroTitle.textContent = translations[language].heroTitle;
  getInTouchButton.textContent = translations[language].getInTouch;
  scrollDown.textContent = translations[language].scrollDown;
  cvButton.textContent = translations[language].cvButton;

  // Cập nhật tất cả các section-title
  sectionTitles.forEach((title, index) => {
    title.textContent = translations[language].sectionTitles[index];
  });

  // Cập nhật nội dung cho các tiêu đề mục liên hệ
  contactItemTitles.forEach((title, index) => {
    title.textContent = translations[language].contactItemTitles[index];
  });

  sectionText.forEach((text, index) => {
    text.textContent = translations[language].sectionText[index];
  });
}


// Lắng nghe sự kiện thay đổi ngôn ngữ
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value; 
  updateLanguage(selectedLanguage); 
});

// Thiết lập ngôn ngữ mặc định là tiếng Anh
updateLanguage("en");

