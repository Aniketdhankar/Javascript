
    let intervalId;

    // Function to generate a random color
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to change background color
    function changeBackgroundColor() {
      document.body.style.backgroundColor = randomColor();
    }

    // Start button
    document.getElementById('start').addEventListener('click', () => {
      if (!intervalId) {
        // ✅ Calling the function by its name instead of inline callback
        intervalId = setInterval(changeBackgroundColor, 1000);
      }
    });

    // Stop button
    document.getElementById('stop').addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null;
    });
