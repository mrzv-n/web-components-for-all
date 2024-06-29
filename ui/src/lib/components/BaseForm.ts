import { LitElement, html, css } from 'lit';

export class BaseForm extends LitElement {
  static override get properties() {
    return {
      name: {
        type: String,
      },
    };
  }
  // Define scoped styles right with your component, in plain CSS
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
  }

  // Render the UI as a function of component state
  override render() {
    return html` <base-input></base-input> `;
  }
}
customElements.define('base-form', BaseForm);
