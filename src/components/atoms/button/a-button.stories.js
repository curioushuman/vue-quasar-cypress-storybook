// AButton.stories.js

import { withDesign } from 'storybook-addon-designs';

import AButton from './a-button.vue';

export default {
  title: 'Design System/Atoms/Button',
  component: AButton,
  decorators: [withDesign],
  parameters: {
    design: {
      preset: 'figma',
      url: 'https://www.figma.com/file/rOuJNFKqGIqZVecuBV8FNz/Alpha?node-id=84%3A57780',
    },
  },
};

// Args template
const Template = (args) => ({
  components: { AButton },
  setup() {
    return { args };
  },
  template: '<AButton v-bind="args" />',
});

// STORIES

// #1 Buttons : presets

// #1.1 Buttons : presets : search

/**
 * #1.1.1 Search with default
 */
export const SearchPrimary = Template.bind({});
SearchPrimary.args = { preset: 'search' };

/**
 * #1.1.2 Search with alternate color
 */
export const SearchSecondary = Template.bind({});
SearchSecondary.args = { ...SearchPrimary.args, color: 'secondary' };

/**
 * #1.1.3 Search without icon
 * ! Deprecated for now
 */
// export const SearchWithoutIcon = Template.bind({});
// SearchWithoutIcon.args = { ...SearchPrimary.args, icon: '' };

/**
 * #1.1.4 Alternate label
 */
export const SearchAlternateLabel = Template.bind({});
SearchAlternateLabel.args = {
  ...SearchPrimary.args,
  label: 'Search for specific stuff',
};

// #1.2 Buttons : presets : others

/**
 * #1.2.1 Favourite with default
 */
export const FavouritePrimary = Template.bind({});
FavouritePrimary.args = { preset: 'favourite' };

/**
 * #1.2.2 Add with default
 */
export const AddPrimary = Template.bind({});
AddPrimary.args = { preset: 'add' };

// #2 Buttons : non-presets

// #2.1 Buttons : non-presets : primary

/**
 * #2.1.1 Primary, label, no icon
 */
export const Primary = Template.bind({});
Primary.args = { color: 'primary', label: 'Primary color' };

/**
 * #2.1.2 Primary, label, icon
 */
export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Primary with icon',
  icon: 'users',
};

/**
 * #2.1.3 Primary, missing label
 */
export const PrimaryMissingLabel = Template.bind({});
PrimaryMissingLabel.args = {
  label: '',
};

// #2.2 Buttons : non-presets : others

/**
 * #2.2.1 Secondary, label, icon
 */
export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  color: 'secondary',
  label: 'Secondary with icon',
  icon: 'user-friends',
};

/**
 * #2.2.2 Tertiary, label, icon
 */
export const TertiaryWithIcon = Template.bind({});
TertiaryWithIcon.args = {
  color: 'tertiary',
  label: 'Tertiary with icon',
  icon: 'user-ninja',
};
