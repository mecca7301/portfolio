const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#555';
    });

    ctaButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#333';
    });
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.getElementById('toggle');
        if (toggle) {
            toggle.checked = false;
        }
    });
});
