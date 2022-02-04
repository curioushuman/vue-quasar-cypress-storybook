<template>
  <div>
    <q-btn
      v-if="buttonIcon"
      data-cy="button"
      :icon="buttonIcon"
      :outline="buttonOutline"
      :color="buttonColor"
      :text-color="buttonTextColor"
      :label="buttonLabel"
      :disabled="buttonDisabled"
      @click="$emit('click')"
    />
    <q-btn
      v-else
      data-cy="button"
      :outline="buttonOutline"
      :color="buttonColor"
      :text-color="buttonTextColor"
      :label="buttonLabel"
      :disabled="buttonDisabled"
      @click="$emit('click')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import {
  presetIcon,
  presetLabel,
  presetsAvailable,
} from '../../composables/componentPresets';
import {
  buttonTypes,
  buttonOutline,
  buttonColor,
  buttonTextColor,
} from '../../composables/componentUtilities';

const presetKeys = presetsAvailable();

/**
 * Outputs a simple Quasar button with a label, color, and optional icon. It's main purpose is to handle presets, and make sure
 * they are consistent across the app. e.g. all search buttons should use the same icon, and label.
 */
export default defineComponent({
  name: 'AButton',
  props: {
    /**
     * Use this field to benefit from global presets e.g. search, add, edit, delete, etc.
     */
    preset: {
      type: String,
      default: '',
      validator: (value: string) => presetKeys.includes(value),
    },
    /**
     * Buttons can be primary, secondary tertiary. Defaults to primary.
     */
    type: {
      type: String,
      default: 'primary',
      validator: (value: string) => buttonTypes.includes(value),
    },
    /**
     * Derived from preset (if preset label exists), overridden if value entered, will show missing label if none exists.
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * Derived from preset (if preset icon exists), overridden if value entered, will not include icon if none exists.
     */
    icon: {
      type: String,
      default: '',
    },
    /**
     * A reactive flag to disable the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    /**
     * Emits a simple click, with no validation on the emit
     */
    click: null,
  },
  setup(props) {
    const { preset, type, label, icon, disabled } = toRefs(props);
    return {
      buttonIcon: presetIcon(preset.value, icon.value),
      buttonLabel: presetLabel(preset.value, label.value),
      buttonColor: buttonColor(type.value),
      buttonTextColor: buttonTextColor(type.value),
      buttonOutline: buttonOutline(type.value),
      buttonDisabled: disabled,
    };
  },
});
</script>

<style scoped></style>
