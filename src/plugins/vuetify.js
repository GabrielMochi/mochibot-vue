import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.darken1,
        secondary: colors.grey.darken4,
        accent: colors.cyan.accent3,
        info: colors.blue.darken2,
        success: colors.teal.darken1,
        warning: colors.yellow.darken2,
        error: colors.pink.darken1
      }
    }
  }
})
