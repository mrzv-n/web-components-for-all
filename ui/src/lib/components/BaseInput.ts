import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseInputStyles } from '../styles/baseInputStyles';

@customElement('base-input')
export class BaseInput extends LitElement {
  @property()
  label = '';

  @property()
  value = '';

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

  @property({ type: Function, attribute: false })
  maskFunction = (value: string): string => value;

  static override styles = [baseInputStyles];

  constructor() {
    super();
    this.value = '';
    this.filled = false;
    this.disabled = false;
  }

  override firstUpdated() {
    this.toggleInputFilled();
  }

  toggleInputFilled() {
    this.filled = !!this.value;
  }

  onInput(e: Event) {
    e.preventDefault();

    if (this.maskFunction) {
      (e.target as HTMLInputElement).value = this.maskFunction(
        (e.target as HTMLInputElement).value
      );
    }

    this.value = (e.target as HTMLInputElement).value;
    this.filled = !!this.value;
  }

  renderError() {
    if (this.error) {
      return html` <div class="base-input__error-msg">${this.error}</div> `;
    } else {
      return nothing;
    }
  }

  // Для демки с импользованием маски ВНУТРИ компонента
  // maskFunction(value: string) {
  //   // Удаляем все нечисловые символы
  //   value = value.replace(/\D/g, '');
  //
  //   if (value.length > 11) {
  //     value = value.slice(0, 11);
  //   }
  //
  //   const match = value.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  //   if (match) {
  //     return `+${match[1]}${match[2] ? ` (${match[2]}` : ''}${
  //       match[3] ? `) ${match[3]}` : ''
  //     }${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;
  //   }
  //
  //   return value;
  // }

  override render() {
    return html`
      <div class="base-input">
        <div class="base-input__body">
          <input
            class="base-input__input"
            type="text"
            .value=${this.value}
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
