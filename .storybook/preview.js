import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/line-awesome/line-awesome.css'

// TODO - return to this if you use them
// import '@quasar/extras/animate/fadeInUp.css'
// import '@quasar/extras/animate/fadeOutDown.css'
// import '@quasar/extras/animate/fadeInRight.css'
// import '@quasar/extras/animate/fadeOutRight.css'

import 'quasar/dist/quasar.css'
import { app } from '@storybook/vue3'
import { Quasar } from 'quasar'

app.use(Quasar, {})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
