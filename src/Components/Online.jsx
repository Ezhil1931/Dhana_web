import React from 'react'
import './Animation.css'

function Online() {
  

    document.addEventListener("DOMContentLoaded", () => {
        const items = document.querySelectorAll(".item");
        const showMoreBtn = document.getElementById("showMoreBtn");
        let showMore = false;
      
        items.forEach((item, index) => {
          item.querySelector(".FAQ-title").addEventListener("click", () => {
            if (item.classList.contains("selected")) {
              item.classList.remove("selected");
              item.querySelector(".FAQ-content").classList.remove("show");
            } else {
              document.querySelectorAll(".item").forEach((el) => {
                el.classList.remove("selected");
                el.querySelector(".FAQ-content").classList.remove("show");
              });
              item.classList.add("selected");
              item.querySelector(".FAQ-content").classList.add("show");
            }
          });
        });
      
        showMoreBtn.addEventListener("click", () => {
          showMore = !showMore;
          const itemsToShow = showMore ? items.length : 4;
          document.querySelectorAll(".item").forEach((item, index) => {
            item.style.display = index < itemsToShow ? "block" : "none";
          });
          showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
        });
      
        // Initialize the FAQ display
        document.querySelectorAll(".item").forEach((item, index) => {
          item.style.display = index < 4 ? "block" : "none";
        });
      });
  
  

    
    return (
  <div>
    <div class="FAQ-content">
    <p>I provide comprehensive full-stack development services, which include both front-end and back-end solutions. My expertise covers a wide range of technologies including HTML, CSS, Bootstrap, JavaScript, React.js, AngularJS, ChakraUI, Node.js, Express.js, MongoDB, SQL, C#, .NET Core, and ASP.NET. Whether you need a custom website, web application, or a complete digital solution, I can help.</p>
  </div>

<div class="item">
  <div class="FAQ-title">
    <p class="faqQuestion">2. How can I contact you for a freelance project?</p>
    <span class="expandToggle">+</span>
  </div>
  <div class="FAQ-content">
    <p>You can reach me via email at <a href="mailto:shaikrafikpasha786@gmail.com">shaikrafikpasha786@gmail.com</a> or by phone at +91 8008146642. For a more detailed view of my work, you can check out my GitHub profile <a href="https://github.com/Rafikpashashaik" target="_blank">here</a> or my CodePen <a href="https://codepen.io/Rafael-007/pen/OJeELZX" target="_blank">here</a>.</p>
  </div>
</div>


</div>
    
  )
}

export default Online