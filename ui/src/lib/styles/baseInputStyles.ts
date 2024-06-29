import { css } from 'lit-element';

export const baseInputStyles = css`
  :host {
    --form-input-color-label: #484848;
    --form-input-color-border: #9fa0a7;
    --form-input-color-bg: #fff;
    --form-input-color-focus: #5a9dff;
    --form-input-color-error: #d70509;

    --form-input-height: 70px;
    --form-input-ctrl-dim: var(--form-input-height);
    --form-input-inner-top: 20px;
    --form-input-ctrl-gap: 10px;
    --form-input-icon-dim: 20px;

    position: relative;
  }

  :host * {
    box-sizing: border-box;
  }

  :host(:focus) {
    border: 10px solid #000;
  }

  .base-input__body {
    display: flex;
    position: relative;
  }

  .base-input__label {
    position: absolute;
    left: 16px;
    right: 16px;
    top: 22px;
    color: var(--form-input-color-label);
    transition: transform 0.2s;
    transform-origin: top left;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 1;
    font-size: 16px;
    line-height: 24px;
  }

  .base-input__label:before {
    content: '';
    display: block;
  }

  .base-input__container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid var(--form-input-color-border);
    transition-property: border-color, box-shadow;
    transition-duration: 0.2s;
    border-radius: 8px;
    background-color: var(--form-input-color-bg);
  }

  .base-input__input {
    position: relative;
    height: var(--form-input-height);
    padding: 20px 16px 0;
    width: 100%;
    border: none;
    background-color: transparent;
    box-shadow: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    z-index: 1;
  }

  .base-input__error-msg {
    display: block;
    color: var(--form-input-color-error);
    background-color: #fff;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-100%);
    transition: 0.2s;
    margin-top: 8px;
    position: absolute;
  }

  .base-input__input:focus {
    outline: none;
  }

  :host([filled]) .base-input__label,
  .base-input__input:focus + .base-input__label {
    transform: scale(0.75) translateY(-18px);
  }

  .base-input._error .base-input__container {
    border-color: var(--form-input-color-error);
  }

  .base-input__input:focus + .base-input__label + .base-input__container {
    border-color: var(--form-input-color-focus);
    box-shadow: 0 0 0 4px rgb(90 157 255 / 70%);
  }
`;
