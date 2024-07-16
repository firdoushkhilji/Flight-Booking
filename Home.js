document.querySelectorAll('.toggle').forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const nextElement = this.nextElementSibling.nextElementSibling.nextElementSibling;
      if (nextElement.classList.contains('date-picker')) {
        nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
      } else {
        const picker = this.nextElementSibling.nextElementSibling.nextElementSibling;
        picker.style.display = picker.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  document.getElementById('travellers').addEventListener('input', function () {
    document.getElementById('travellers-info').textContent = `${this.value} Traveller${this.value > 1 ? 's' : ''}`;
  });

  document.getElementById('class').addEventListener('change', function () {
    document.getElementById('class-info').textContent = this.value.toUpperCase();
  });