document.getElementById('payButton').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
    setTimeout(function() {
        window.location.href = 'your-zip-file.zip';  // Replace 'your-zip-file.zip' with the actual path to your zip file
    }, 1000);  // Wait for 1 second before starting the download
});
