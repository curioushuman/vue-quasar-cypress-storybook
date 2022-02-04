import { mount } from '@cypress/vue';
import AButton from '../a-button.vue';
import {
  presets,
  ComponentPreset,
} from '../../../composables/componentPresets';
import {
  labelMissing,
  wrapIcon,
} from '../../../composables/componentUtilities';

/**
 * TODO - it would be better if this was in a-button.vue
 */
interface ButtonProps {
  preset?: string;
  label?: string;
  color?: string;
  icon?: string;
  disabled?: boolean;
}

describe('AButton', () => {
  describe('#1 Presets', () => {
    describe('#1.1 Search', () => {
      before(() => {
        const propsData: ButtonProps = {
          preset: 'search',
        };
        cy.wrap(propsData).as('props');
        const elementPreset: ComponentPreset = presets.search;
        cy.wrap(elementPreset).as('preset');
      });
      describe('#1.1.1 Default', () => {
        it('renders a message', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').should('contain', this.preset.label);
        });
        it('has a `primary` color', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .should('have.backgroundColor', 'var(--q-primary)')
            .should('have.color', 'white');
        });
        it('has a preset icon', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .find('i')
            .should('have.class', wrapIcon(this.preset.icon));
        });
      });
      describe('#1.1.2 Alternate colour', () => {
        it('has a `secondary` color', function () {
          this.props.type = 'secondary';
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .should('have.backgroundColor', 'var(--q-secondary)')
            .should('have.color', 'var(--q-primary)');
        });
      });
      // ! Deprecated for now
      // describe('#1.1.3 Without icon', () => {
      // });
      describe('#1.1.4 Alternate label', () => {
        it('has an overridden label', function () {
          const label = 'Search for specific stuff';
          this.props.label = label;
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').should('contain', label);
        });
      });
    });
    describe('#1.2 Others', () => {
      before(() => {
        const propsData: ButtonProps = {
          preset: 'favourite',
        };
        cy.wrap(propsData).as('props');
        const elementPreset: ComponentPreset = presets.favourite;
        cy.wrap(elementPreset).as('preset');
      });
      describe('#1.2.1 Favourite', () => {
        it('renders a message', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').should('contain', this.preset.label);
        });
        it('has a preset icon', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .find('i')
            .should('have.class', wrapIcon(this.preset.icon));
        });
      });
      describe('#1.2.2 Add', () => {
        before(() => {
          const propsData: ButtonProps = {
            preset: 'add',
          };
          cy.wrap(propsData).as('props');
          const elementPreset: ComponentPreset = presets.add;
          cy.wrap(elementPreset).as('preset');
        });
        // TODO - how to test no message?
        // it('has no message', function () {
        //   mount(AButton, {
        //     props: this.props,
        //   });
        //   cy.dataCy('button').should('contain', this.preset.label);
        // });
        it('has a preset icon', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .find('i')
            .should('have.class', wrapIcon(this.preset.icon));
        });
      });
    });
  });
  describe('#2 Non-presets', () => {
    describe('#2.1 Primary', () => {
      before(() => {
        const propsData: ButtonProps = {
          label: '#2.1 Primary',
        };
        cy.wrap(propsData).as('props');
      });
      describe('#2.1.1 Primary, label, no icon', () => {
        it('renders a message', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').should('contain', this.props.label);
        });
        it('has a `primary` color', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .should('have.backgroundColor', 'var(--q-primary)')
            .should('have.color', 'white');
        });
        it('has no icon', function () {
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').find('i').should('not.exist');
        });
      });
      describe('#2.1.2 Primary, label, icon', () => {
        it('has an icon', function () {
          this.props.icon = 'users';
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .find('i')
            .should('have.class', wrapIcon(this.props.icon));
        });
      });
      describe('#2.1.3 Primary, missing label', () => {
        it('renders a default `missing` message', function () {
          this.props.label = '';
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button').should('contain', labelMissing);
        });
      });
    });
    describe('#2.2 Others', () => {
      before(() => {
        const propsData: ButtonProps = {
          label: '#2.2 Others',
          icon: 'user-ninja',
        };
        cy.wrap(propsData).as('props');
      });
      describe('#2.2.1 Secondary, label, icon', () => {
        it('has a `secondary` color', function () {
          this.props.type = 'secondary';
          mount(AButton, {
            props: this.props,
          });
          cy.dataCy('button')
            .should('have.backgroundColor', 'var(--q-secondary)')
            .should('have.color', 'var(--q-primary)');
        });
      });
      describe('#2.2.2 Tertiary, label, icon', () => {
        it('has a `primary` border and text color', function () {
          this.props.type = 'tertiary';
          mount(AButton, {
            props: this.props,
          });
          // * REMEMBER Tertiary is an outline
          cy.dataCy('button')
            // * border-color requires you to define a specific RGB or HEX
            // .should('have.css', 'border-color', 'var(--q-primary)')
            .should('have.color', 'var(--q-primary)');
        });
      });
    });
  });
});
