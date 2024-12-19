import React from 'react'

function TypingAni() {
    const welcomeText = document.getElementById("welcome");
    const text = "Welcome to my portfolio!";
    let i = 0;
    let speed = 50;
    let intervalId = setInterval(() = > {
      if (i < text.length) {
        welcomeText.innerHTML += text[i];
        i++;
        } else {
          clearInterval(intervalId);
          }
  return (
    <div>
      
    </div>
  )
}

export default TypingAni
