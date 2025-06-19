document.addEventListener('DOMContentLoaded', () => {
    function generateQR(targetId) {
        const qrcodeDiv = document.getElementById(targetId);
        qrcodeDiv.innerHTML = '';
        qrcodeDiv.style.display = 'block';
        new QRCode(qrcodeDiv, {
            text: window.location.href,
            width: 100,
            height: 100,
            colorDark: '#1C4E7D',
            colorLight: '#FFFFFF'
        });
    }

    function showAppointmentForm() {
        document.getElementById('appointmentForm').style.display = 'block';
    }

    function hideAppointmentForm() {
        document.getElementById('appointmentForm').style.display = 'none';
    }

    function scrollToServices() {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }

    // Генерация QR-кода при загрузке страницы
    generateQR('servicesQR');

    // Привязка событий к кнопкам
    document.getElementById('appointmentBtn').addEventListener('click', showAppointmentForm);
    document.getElementById('servicesBtn').addEventListener('click', scrollToServices);
    document.getElementById('closeFormBtn').addEventListener('click', hideAppointmentForm);
});