function handleOptionClick(event) {
    const optionId = event.currentTarget.id;
    switch (optionId) {
        case 'option1':
            document.getElementById('option1').addEventListener('click', function() {
                document.body.innerHTML = '';
                document.body.style.margin = '0';
                document.body.style.height = '100vh';
                document.body.style.overflow = 'hidden';
                const video = document.createElement('video');
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover';
                video.src = 'img/funny.mp4';
                video.autoplay = true;
                video.muted = false;
                document.body.appendChild(video);
                video.play().catch(error => {
                  console.error("Error attempting to play video:", error);
                });
                setTimeout(() => {
                  window.close();
                }, 14000);
              });
            break;
        case 'option2':
            document.getElementById('option2').addEventListener('click', function() {
                document.body.innerHTML = '';
                document.body.style.margin = '0';
                document.body.style.height = '100vh';
                document.body.style.overflow = 'hidden';
                const video = document.createElement('video');
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover';
                video.src = 'img/funny2.mp4';
                video.autoplay = true;
                video.muted = false;
                document.body.appendChild(video);
                video.play().catch(error => {
                  console.error("Error attempting to play video:", error);
                });
                setTimeout(() => {
                  window.close();
                }, 14000);
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
      const copyImage = this.querySelector('img');
      const copyText = this.querySelector('.copy-text');
      const originalSrc = copyImage.src;
      const newSrc = 'img/checkmark.png';
      const originalText = copyText.textContent;
      const newText = "Copied!";
      navigator.clipboard.writeText(details).then(() => {
        console.log('Text copied to clipboard');
        copyImage.src = newSrc;
        copyText.textContent = newText;
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


