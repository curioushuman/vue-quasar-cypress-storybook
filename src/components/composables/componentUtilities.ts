// MISCELlANEOUS

// default fillers
const labelMissing = '!! Missing label !!';

// BUTTONS

const buttonTypes: string[] = ['primary', 'secondary', 'tertiary'];

/**
 * Indicates whether or not this button type should be outlined or filled in
 * @param bType - button type
 * @returns {boolean} whether or not the element should be outlined
 */
export function buttonOutline(bType: string): boolean {
  return bType === 'tertiary' ? true : false;
}

/**
 * Returns the color a button type should be
 * @param bType - button type
 * @returns {string} color
 */
export function buttonColor(bType: string): string {
  return bType === 'tertiary' ? 'primary' : bType;
}

/**
 * Returns the text color a button type should have
 * @param bType - button type
 * @returns {string} text color
 */
export function buttonTextColor(bType: string): string | null {
  return bType === 'primary' ? null : 'primary';
}

// ICONS
// this is so we can switch icon libraries easily
const iconPre = 'las la-';

/**
 * Simple function to wrap an icon key with the correct icon library prefix
 * @param icon - icon key
 * @returns {string} wrapped icon
 */
export function wrapIcon(icon: string): string {
  if (!icon) {
    return '';
  }
  if (icon.includes(iconPre)) {
    throw 'Icon already wrapped';
  }
  return iconPre + icon;
}

// EXPORT variables

export { labelMissing, buttonTypes };
