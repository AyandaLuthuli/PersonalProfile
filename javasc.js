document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElemetById('profileImage');
    const profileImage = document.createElement('png');
    profileImage.src = 'ayanda.png'; // Replace with the actual path to your image
    profileImage.id = 'profileImage';
    profileImage.style.transition = 'transform 0.2s ease';
    document.body.appendChild(profileImage);
    image.addEventListener('mousemove', function(event) {
        const rect = image.getBundingClientRect();
        const x = event.clientX - ect.left;
        const y = event.clientY - rect.top;

        image.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
    });

    image.addEventListener('mouseleave', function() {
        image.style.transform = 'translate(0, 0)';
    });
});
