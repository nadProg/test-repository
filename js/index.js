document.forms[0].addEventListener('submit', (evt) => {
  const name = evt.currentTarget.elements[0];
  const phone = evt.currentTarget.elements[1];
  evt.preventDefault();
  setTimeout(() => {
    alert(`
      Dear ${name.value}, your order successfully received!
      We will call you on ${phone.value}
      `);
    name.value = '';
    phone.value = '';
  }, 1500);
});