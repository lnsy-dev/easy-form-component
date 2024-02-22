class EasyForm extends HTMLElement {
  connectedCallback() {
    // Find the submit button within the custom element
    const submitButton = this.querySelector('input[type="submit"]');
    if (submitButton) {
      this.monitorInputs(submitButton); // Monitor input changes to enable/disable the submit button
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const values = this.getFormValues();
        this.dispatchEvent(new CustomEvent('submit', { detail: values }));
      });
    }
  }

  monitorInputs(submitButton) {
    // Monitor all inputs and textareas for changes
    const inputs = [...this.querySelectorAll('input, textarea')];
    inputs.forEach(input => {
      // Ignore the submit button itself
      if (input.type !== 'submit') {
        input.addEventListener('input', () => {
          // Check if all required inputs are filled to enable/disable the submit button
          const allFilled = this.checkRequiredFieldsFilled();
          submitButton.disabled = !allFilled;
        });
      }
    });
    // Initial check to set the submit button's initial state
    submitButton.disabled = !this.checkRequiredFieldsFilled();
  }

  checkRequiredFieldsFilled() {
    // Check if all required inputs and textareas have values
    const requiredFields = [...this.querySelectorAll('[required]')];
    return requiredFields.every(field => field.value.trim() !== '');
  }

  getFormValues() {
    let values = {};
    [...this.querySelectorAll('input, textarea')].forEach(el => {
      if (el.name === "") {
        console.error('All inputs and textareas need a name attribute');
        return;
      }
      if (el.type === 'submit') {
        // Ignore submit inputs when gathering form values
        return;
      }
      // Handling different input types
      switch (el.type) {
        case "number":
        case "range":
          values[el.name] = Number(el.value);
          break;
        case "checkbox":
          values[el.name] = el.checked;
          break;
        case "text":
        default:
          values[el.name] = el.value;
      }
    });

    return values;
  }
}

customElements.define('easy-form', EasyForm);
