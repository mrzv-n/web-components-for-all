import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseInputStyles } from '../styles/baseInputStyles';

@customElement('base-selector')
export class BaseSelector extends LitElement {
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
    type: Boolean,
    reflect: true,
  })
  opened = false;

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
    this.opened = false;
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

  showDropdown() {
    this.opened = true;
  }

  hideDropdown() {
    this.opened = false;
  }

  toggleDropdown() {
    this.opened = !this.opened;
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
            @focus=${this.showDropdown}
            @input=${this.onInput}
          />
          <label class="base-input__label">${this.label}</label>
          <div class="base-input__container"></div>

          <button
            type="button"
            class="base-input__ctrl"
            data-dropdown-ctrl
            @click=${this.toggleDropdown}
          >
            <svg
              viewBox="0 0 10 9"
              xmlns="http://www.w3.org/2000/svg"
              class="base-input__ctrl-icon"
              width="20"
              height="20"
            >
              <path
                fill="currentColor"
                d="M5 6.34375L4.64645 6.6973L5 7.05086L5.35355 6.6973L5 6.34375ZM8.33395 2.3027L4.64645 5.9902L5.35355 6.6973L9.04105 3.0098L8.33395 2.3027ZM5.35355 5.9902L1.66605 2.3027L0.958946 3.0098L4.64645 6.6973L5.35355 5.9902Z"
              />
            </svg>
          </button>

          <div class="base-input__dropdown dropdown dropdown--scrollable">
            <div class="dropdown__body">
              <ul class="dropdown__list">
                <li class="dropdown__item">
                  <button
                    type="button"
                    class="dropdown__button"
                    data-dropdown-item
                  >
                    г. Москва
                  </button>
                </li>
                <li class="dropdown__item _selected">
                  <button
                    type="button"
                    class="dropdown__button"
                    data-dropdown-item
                  >
                    Владимирская область
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        ${this.renderError()}
      </div>
    `;
  }
}
