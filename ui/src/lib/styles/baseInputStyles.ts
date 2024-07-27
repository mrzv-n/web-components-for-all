import { css } from 'lit-element';

export const baseInputStyles = css`
  :host {
    --form-input-color-label: #244855;
    --form-input-color-border: #244855;
    --form-input-color-bg: #fff;
    --form-input-disabled-color-bg: #9eaaa9;
    --form-input-color-focus: #90aead;
    --form-input-color-error: #e64833;

    --form-input-height: 70px;
    --form-input-ctrl-dim: var(--form-input-height);
    --form-input-inner-top: 20px;
    --form-input-ctrl-gap: 10px;
    --form-input-icon-dim: 20px;
    --form-input-color-icon: var(--form-input-color-label);

    position: relative;
  }

  :host * {
    box-sizing: border-box;
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
    color: var(--form-input-color-label);
    box-shadow: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    z-index: 1;
  }

  .base-input__input:focus {
    outline: none;
  }

  :host([filled]) .base-input__label,
  .base-input__input:focus + .base-input__label {
    transform: scale(0.75) translateY(-18px);
  }

  .base-input__input:focus + .base-input__label + .base-input__container {
    border-color: var(--form-input-color-focus);
    box-shadow: 0 0 0 4px var(--form-input-color-focus);
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
    font-size: 12px;
    line-height: 1.2;
    position: absolute;
  }

  :host([error]) .base-input__container {
    border-color: var(--form-input-color-error);
  }

  :host([error]) .base-input__error-msg {
    position: static;
    transform: translate(0);
    opacity: 1;
    visibility: visible;
  }

  :host([disabled]) .base-input__container {
    background-color: var(--form-input-disabled-color-bg);
  }

  .base-input__dropdown {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition-property: opacity, visibility, transform;
    transition-duration: 0.2s;
    transform: translateY(-10);
    z-index: 2;
  }

  :host([opened]) .base-input__dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .base-input__ctrl {
    width: var(--form-input-ctrl-dim);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 0;
    background-color: transparent;
    z-index: 1;
  }

  :host([opened]) .base-input__ctrl-icon {
    transform: rotate(-180deg);
  }

  .base-input__ctrl-icon {
    width: var(--form-input-icon-dim);
    height: var(--form-input-icon-dim);
    color: var(--form-input-color-icon);
    transition-property: color, transform;
    transition-duration: 0.2s;
  }
`;
