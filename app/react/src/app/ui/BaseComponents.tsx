import React from 'react';
import { createComponent } from '@lit/react';
import { BaseForm, BaseSelector, BaseInput } from '@web-components-for-all/ui';
export const UIInput = createComponent({
  tagName: 'base-input',
  elementClass: BaseInput,
  react: React,
  events: {
    oninput: 'input',
  },
});

export const UIForm = createComponent({
  tagName: 'base-form',
  elementClass: BaseForm,
  react: React,
});

export const UISelector = createComponent({
  tagName: 'base-selector',
  elementClass: BaseSelector,
  react: React,
  events: {
    onselectitem: 'select-item',
  },
});
