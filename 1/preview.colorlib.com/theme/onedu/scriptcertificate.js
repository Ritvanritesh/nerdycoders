function editImage() {
      const nameInput = document.getElementById('nameInput').value;
      const workInput = document.getElementById('workInput').value;
      const editedCanvas = document.getElementById('editedCanvas');
      const context = editedCanvas.getContext('2d');

      // Load a base PNG image (replace with your image URL)
      const baseImage = new Image();
      baseImage.src = 'certificate_template.PNG'; // Replace with the path to your base PNG image

      baseImage.onload = function() {
        // Draw the base image onto the canvas
        context.drawImage(baseImage, 0, 0, editedCanvas.width, editedCanvas.height);

        // Set text styling
        context.font = '20px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'center';

        // Draw the user-entered name and work on the canvas
        context.fillText(nameInput, editedCanvas.width / 2, editedCanvas.height / 2 - 20);
        context.fillText(workInput, editedCanvas.width / 2, editedCanvas.height / 2 + 20);
      };
    }

    function downloadImage() {
      const editedCanvas = document.getElementById('editedCanvas');
      const dataUrl = editedCanvas.toDataURL('certificate_template.PNG');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'edited_image.png';

      // Append the link to the document and trigger a click event
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }
