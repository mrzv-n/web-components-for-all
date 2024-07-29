import { LitElement, html } from 'lit';
import { baseFormStyles } from '../styles/baseFormStyles';
import { customElement } from 'lit/decorators.js';

@customElement('base-form')
export class BaseForm extends LitElement {
  static override styles = [baseFormStyles];

  override render() {
    return html`<slot></slot>`;
  }
}
