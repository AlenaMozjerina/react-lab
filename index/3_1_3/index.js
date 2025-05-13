(function () {
  const form = document.querySelector('#form');
  const editButton = document.querySelector('#editButton');
  const firstNameInput = document.querySelector('#firstNameInput');
  const firstNameText = document.querySelector('#firstNameText');
  const lastNameInput = document.querySelector('#lastNameInput');
  const lastNameText = document.querySelector('#lastNameText');
  const helloText = document.querySelector('#helloText');

  const state = reactive({
    isEditing: false,
    firstName: 'John',
    lastName: 'Doe'
  }, render);

  form.addEventListener('submit', e => {
    e.preventDefault();
    state.isEditing = !state.isEditing;
  });

  firstNameInput.addEventListener('input', e => {
    state.firstName = e.target.value;
  });

  lastNameInput.addEventListener('input', e => {
    state.lastName = e.target.value;
  });

  function render() {
    const { isEditing, firstName, lastName } = state;

    if (!isEditing) {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
    }

    firstNameText.textContent = firstName;
    lastNameText.textContent = lastName;
    helloText.textContent = `Hello, ${firstName} ${lastName}!`;

    editButton.textContent = isEditing ? 'Save Profile' : 'Edit Profile';
    toggleVisibility(firstNameInput, isEditing);
    toggleVisibility(lastNameInput, isEditing);
    toggleVisibility(firstNameText, !isEditing);
    toggleVisibility(lastNameText, !isEditing);
  }

  function toggleVisibility(element, show) {
    element.style.display = show ? '' : 'none';
  }

  function reactive(initialState, render) {
    return new Proxy(initialState, {
      set(target, key, value) {
        target[key] = value;
        render();
        return true;
      }
    });
  }

  render();
})();