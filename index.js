function handleOptionClick(event) {
    const optionId = event.currentTarget.id;
    switch (optionId) {
        case 'option1':
            document.getElementById('option1').addEventListener('click', function() {
                // Remove all elements from the page
                document.body.innerHTML = '';
              
                // Ensure the body takes up at least the full height of the viewport
                document.body.style.margin = '0';
                document.body.style.height = '100vh';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
              
                // Create a video element that fills the window
                const video = document.createElement('video');
              
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover'; // Ensure the video covers the space without distortion
                video.src = 'img/funny.mp4'; // Update this path to your video
                video.autoplay = true;
                video.muted = false; // Mute the video to meet autoplay policies of most browsers
              
                // Append the video to the body
                document.body.appendChild(video);
              
                // Play the video
                video.play().catch(error => {
                  console.error("Error attempting to play video:", error);
                });
              
                // Set a timer to attempt to close the tab after 3 seconds of video playback
                setTimeout(() => {
                  window.close(); // Note: This might not work if the tab wasn't opened by script
                }, 14000); // 3 seconds
              });
            break;
        case 'option2':
            document.getElementById('option2').addEventListener('click', function() {
                // Remove all elements from the page
                document.body.innerHTML = '';
              
                // Ensure the body takes up at least the full height of the viewport
                document.body.style.margin = '0';
                document.body.style.height = '100vh';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
              
                // Create a video element that fills the window
                const video = document.createElement('video');
              
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover'; // Ensure the video covers the space without distortion
                video.src = 'img/funny2.mp4'; // Update this path to your video
                video.autoplay = true;
                video.muted = false; // Mute the video to meet autoplay policies of most browsers
              
                // Append the video to the body
                document.body.appendChild(video);
              
                // Play the video
                video.play().catch(error => {
                  console.error("Error attempting to play video:", error);
                });
              
                // Set a timer to attempt to close the tab after 3 seconds of video playback
                setTimeout(() => {
                  window.close(); // Note: This might not work if the tab wasn't opened by script
                }, 14000); // 3 seconds
              });
            break;
        default:
            console.log('Unknown option: ' + optionId);
    }
}

document.querySelectorAll('#option1, #option2, #option3, #option4').forEach(option => {
    option.addEventListener('click', handleOptionClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-to-clipboard');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const details = this.parentNode.querySelector('.details').textContent;
      const copyImage = this.querySelector('img'); // Get the image inside the '.copy-to-clipboard' div
      const copyText = this.querySelector('.copy-text'); // Get the '.copy-text' paragraph
      const originalSrc = copyImage.src; // Store the original src of the image
      const newSrc = 'img/checkmark.png'; // The new image source after clicking
      const originalText = copyText.textContent; // Store the original text
      const newText = "Copied!"; // The new text after clicking

      // Copy text to clipboard
      navigator.clipboard.writeText(details).then(() => {
        console.log('Text copied to clipboard');

        // Change the image source to the new image
        copyImage.src = newSrc;

        // Change the text
        copyText.textContent = newText;

        // Change the image source and text back to the original after 3 seconds
        setTimeout(() => {
          copyImage.src = originalSrc;
          copyText.textContent = originalText;
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});


