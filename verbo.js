// Função para abrir links de e-mail e telefone
function abreLink(dado, tipo) {
    if (tipo === 1)
        window.location.href = 'mailto:' + dado;
    else if (tipo === 2)
        window.location.href = 'tel:' + dado;

}

// Event listeners para e-mail e telefone
document.addEventListener('DOMContentLoaded', () => {
    const emailEl = document.querySelector('p[onclick*="abreLink(\'josedjalmacunha97@gmail.com\',1)"]');
    const phoneEl = document.querySelector('p[onclick*="abreLink(\'11913180308\',2)"]');

    if (emailEl) {
        emailEl.addEventListener('click', () => {
            abreLink('josedjalmacunha97@gmail.com', 1);
        });
    }

    if (phoneEl) {
        phoneEl.addEventListener('click', () => {
            abreLink('11913180308', 2);
        });
    }
});

const profileImg = document.getElementById('profile-img');

// Simple hover effect
profileImg.addEventListener('mouseover', () => {
    profileImg.style.transform = 'scale(1.05)';
    profileImg.style.transition = 'transform 0.3s ease-in-out';
});
profileImg.addEventListener('mouseout', () => {
    profileImg.style.transform = 'scale(1)';
});