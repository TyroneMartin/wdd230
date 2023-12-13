document.addEventListener('DOMContentLoaded', function() {
        var targetImage = document.querySelector('.Home-section1-img');

        if (targetImage) {
            targetImage.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });
        }
    });
