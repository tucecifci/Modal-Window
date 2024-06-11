![screencapture-tucecifci-github-io-Modal-Window-2024-06-11-15_40_09](https://github.com/tucecifci/Modal-Window/assets/151346784/296c042f-ed45-4afb-9d8a-6b4758925230)# Modal-Window

Hello everybody! 👋 </br>
✨ Welcome to the Modal Window project! This project is a simple modal window implementation using HTML, CSS, and JavaScript. It demonstrates how to create a modal window that can be opened and closed by clicking specific buttons. The project covers basic concepts such as event handling, DOM manipulation, and styling for a responsive and user-friendly interface.


## 👀 Overview

### 📷 Screenshot





### 🔗 Links

- https://tucecifci.github.io/Modal-Window/

## My process

### 💡 Built with

- HTML: For the basic structure of the modal window.
- CSS: For styling the modal window, overlay effect, and ensuring responsiveness.
- JavaScript: For handling the opening and closing of the modal window.

### 🧠 What I learned

- Event Handling: Learned how to add event listeners to elements for user interactions.
- DOM Manipulation: Gained experience in manipulating the DOM to show and hide elements.
- Responsive Design: Improved understanding of creating responsive web designs that work across different devices.
- CSS Styling: Enhanced skills in CSS to create visually appealing and functional modal windows.
- JavaScript Functions: Practiced writing clean and efficient JavaScript functions to handle the logic for opening and closing the modal.


```javascript
  unction openModal() {
  modalContainer.style.display = "block";
}
function closeModal() {
  modalContainer.style.display = "none";
}
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none"; 
  }
});
```

### 👩🏼‍💻 Features

- Open/Close Modal: Users can open the modal by clicking an "Open Modal" button and close it by clicking a "Close" button inside the modal or clicking outside the modal window.
- Responsive Design: The modal is designed to be responsive and works well on various screen sizes.
- Overlay Effect: An overlay effect is implemented to highlight the modal window and obscure the background content.


### 🤔 How to Use

1. Opening the Modal: Click the "Open Modal" button to open the modal window. <br/>
2. Closing the Modal: <br>
- Click the "Close" button inside the modal.
- Click anywhere outside the modal window.


### 🤌🏻 Useful resources

- [https://www.goodreads.com/quotes](https://www.youtube.com/watch?v=5fb2aPlgoys)

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
