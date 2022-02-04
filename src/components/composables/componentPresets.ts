import { wrapIcon, labelMissing } from './componentUtilities';

type PresetType = 'search' | 'add' | 'favourite';

export interface ComponentPreset {
  icon: string;
  label?: string | undefined;
}

/**
 * List of available element presets.
 * * If you add a preset, please update any related stories & tests
 */
const presets: Record<PresetType, ComponentPreset> = {
  search: {
    icon: 'search',
    label: 'Search',
  },
  add: {
    icon: 'plus',
  },
  favourite: {
    icon: 'bookmark',
    label: 'Favourite',
  },
};

export { presets };

/**
 * Provides the correct icon key for the defined element type
 * @param presetType - type of the element (see interface above)
 * @param iconOverride - an icon key to override the default
 * @returns {string} icon key
 */
export function presetIcon(presetType: string, iconOverride: string): string {
  const key = presetType as keyof typeof presets;
  const icon = presets[key] ? presets[key].icon : iconOverride;
  return wrapIcon(icon);
}

/**
 * Provides the default label for the defined element type
 * @param presetType - typeof the element
 * @returns {string} default label
 */
export function presetLabel(presetType: string, labelOverride: string): string {
  // we allow the label to be overridden
  if (labelOverride) {
    return labelOverride;
  }
  const key = presetType as keyof typeof presets;
  const emptyLabel = labelMissing;
  return presets[key] ? presets[key].label || '' : emptyLabel;
}

/**
 * Lists the available element types
 * @returns {string[]} Array of available element types
 */
export function presetsAvailable(): string[] {
  const available: string[] = Object.keys(presets);
  available.push('');
  return available;
}
