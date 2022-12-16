



class EasyForm extends HTMLElement {
  connectedCallback(){
    const submit = document.querySelector('input[type="submit"');
    console.log(submit);
    if(submit !== null){
      submit.addEventListener('click', (e)=>{
        e.preventDefault(); 
        const values = this.getFormValues();
        console.log(values)
        this.dispatchEvent(new CustomEvent('submit', {detail: values}))
      })
    }

  }

  getFormValues(){

    let values = {};
    [...this.querySelectorAll('input')].forEach(el => {
      switch(el.type){
      case "submit":
        break;
      case "number":
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

customElements.define('easy-form', EasyForm)


