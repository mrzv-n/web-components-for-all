import { LitElement, html } from 'lit';
import { baseFormStyles } from '../styles/baseFormStyles';

export class BaseForm extends LitElement {
  static override get properties() {
    return {
      name: {
        type: String,
      },
    };
  }
  // Define scoped styles right with your component, in plain CSS
  static override styles = [baseFormStyles];

  constructor() {
    super();
    // Declare reactive properties
  }

  // Render the UI as a function of component state
  override render() {
    return html`<slot></slot>`;
  }
}
customElements.define('base-form', BaseForm);
