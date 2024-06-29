import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseInputStyles } from '../styles/baseInputStyles';

@customElement('base-input')
export class BaseInput extends LitElement {
  @property()
  value = 'AAAA';

  @property({
    type: Boolean,
    reflect: true,
  })
  filled = false;

  static styles = [baseInputStyles];

  constructor() {
    super();
    // Declare reactive properties
    this.value = '';
    this.filled = false;
  }

  firstUpdated() {
    this.toggleInputFilled();
  }

  toggleInputFilled() {
    this.filled = !!this.value;
  }

  onInput(e) {
    this.value = e.target.value;
    this.toggleInputFilled();
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="base-input _error">
        <div class="base-input__body">
          <input
            class="base-input__input"
            type="text"
            value=${this.value}
            @input=${this.onInput}
          />
          <label class="base-input__label">Дата рождения</label>
          <div class="base-input__container"></div>
        </div>
        <div class="base-input__error-msg">Сообщеfilledние об ошибке</div>
      </div>
    `;
  }
}
