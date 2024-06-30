import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseInputStyles } from '../styles/baseInputStyles';

@customElement('base-input')
export class BaseInput extends LitElement {
  @property({
    attribute: false,
  })
  label = '';

  @property()
  value = 'AAAA';

  @property({
    type: Boolean,
    reflect: true,
  })
  filled = false;

  @property({
    type: Boolean,
    reflect: true,
  })
  disabled = false;

  @property({
    type: String,
    reflect: true,
    converter: {
      toAttribute: (value) => {
        return value ? true : null;
      },
    },
  })
  error = '';

  static styles = [baseInputStyles];

  constructor() {
    super();
    // Declare reactive properties
    this.value = '';
    this.filled = false;
    this.disabled = false;
  }

  firstUpdated() {
    this.toggleInputFilled();
  }

  toggleInputFilled() {
    this.filled = !!this.value;
  }

  onInput(e) {
    this.value = e.target.value;
    this.filled = !!this.value;
  }

  renderError() {
    if (this.error) {
      return html` <div class="base-input__error-msg">${this.error}</div> `;
    } else {
      return nothing;
    }
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="base-input">
        <div class="base-input__body">
          <input
            class="base-input__input"
            type="text"
            value=${this.value}
            disabled=${this.disabled || nothing}
            @input=${this.onInput}
          />
          <label class="base-input__label">${this.label}</label>
          <div class="base-input__container"></div>
        </div>

        ${this.renderError()}
      </div>
    `;
  }
}
