const radios = document.querySelectorAll('input[name="unit"]');
const totalPrice = document.getElementById('total-price');
const offerBoxes = document.querySelectorAll('.offer-box');

function updateSelection() {
  let selected = false;
  offerBoxes.forEach(box => box.classList.remove('active'));

  radios.forEach(radio => {
    if (radio.checked) {
      const price = parseFloat(radio.dataset.price);
      totalPrice.textContent = `$${price.toFixed(2)} USD`;
      radio.closest('.offer-box').classList.add('active');
      selected = true;
    }
  });

  if (!selected) {
    totalPrice.textContent = `$0.00 USD`;
  }
}

radios.forEach(radio => {
  radio.addEventListener('change', updateSelection);
});

updateSelection();
