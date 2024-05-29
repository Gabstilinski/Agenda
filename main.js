document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name.trim() === '' || phone.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        nameInput.value = '';
        phoneInput.value = '';
    });
});
