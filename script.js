// script.js
document.getElementById('show-more-tasks').addEventListener('click', function () {
    var moreTasks = document.getElementById('more-tasks');
    if (moreTasks.style.display === 'none') {
        moreTasks.style.display = 'block';
        this.textContent = 'Show less tasks ▲';
    } else {
        moreTasks.style.display = 'none';
        this.textContent = 'Show more tasks ▼';
    }
});

document.getElementById('get-hots-button').addEventListener('click', openGetHots);

function openGetHots() {
    document.getElementById('get-hots-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('get-hots-modal').style.display = 'none';
}

function toggleWhyContent() {
    var whyContent = document.getElementById('why-content');
    if (whyContent.style.display === 'none') {
        whyContent.style.display = 'block';
    } else {
        whyContent.style.display = 'none';
    }
}

function generateInviteLink() {
    alert('Custom invite link generated!');
}
