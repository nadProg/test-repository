document.forms['order-form'].addEventListener('submit', (evt) => {
  const name = evt.currentTarget.elements.name;
  const phone = evt.currentTarget.elements.phone;
  evt.preventDefault();
  setTimeout(() => {
    alert(`
      Dear ${name.value}, your order successfully received!
      We will call you on ${phone.value}
      `);
    alert('Thank you for your order!');
    name.value = '';
    phone.value = '';
  }, 1500);
});