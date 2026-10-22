// 🔧 CONFIGURACIÓN CENTRALIZADA DE CONTACTO - Cambiar solo aquí
// Mientras demo sea true se ven la franja y la marca de agua DEMO.
const CONTACT_CONFIG = {
    demo: true,
    phone: '+573122127130',   // WhatsApp y botón principal de llamar
    phone2: '+573104952447',  // segunda línea (data-tel="2")
    whatsappMessages: {
        general: 'Hola, estoy buscando un repuesto. ¿Me pueden ayudar?',
        estufa: 'Hola, necesito un repuesto para mi estufa. Les envío una foto.',
        licuadora: 'Hola, necesito un repuesto para mi licuadora. Les envío una foto.',
        olla: 'Hola, necesito un repuesto para mi olla a presión. Les envío una foto.'
    }
};

function initializeContactLinks() {
    if (CONTACT_CONFIG.demo) {
        document.getElementById('demo-banner').classList.remove('hidden');
        document.getElementById('demo-watermark').classList.remove('hidden');
    }

    document.querySelectorAll('a[data-tel]').forEach(link => {
        link.href = `tel:${link.dataset.tel === '2' ? CONTACT_CONFIG.phone2 : CONTACT_CONFIG.phone}`;
    });
    // WhatsApp usa el formato internacional sin el +
    const whatsappNumber = CONTACT_CONFIG.phone.replace('+', '');
    document.querySelectorAll('a[data-wa]').forEach(link => {
        const message = CONTACT_CONFIG.whatsappMessages[link.dataset.wa] || CONTACT_CONFIG.whatsappMessages.general;
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });
}

initializeContactLinks();

// Mapa: el iframe de Google Maps (~400 KB de JS) se carga solo cuando lo tocan
document.querySelectorAll('[data-map-embed]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = link.dataset.mapEmbed;
        iframe.className = link.dataset.mapClass;
        iframe.title = 'Mapa del local en Montería';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        link.replaceWith(iframe);
    });
});
