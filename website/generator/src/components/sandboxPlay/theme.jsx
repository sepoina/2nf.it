import { atomDark } from '@codesandbox/sandpack-themes'
import colors from 'tailwindcss/lib/public/colors'


export const theme = {
  ...atomDark,
  colors: {
    ...atomDark.colors,
    surface1: colors.zinc[900],
    accent: colors.amber[300],
  },
  syntax: {
    ...atomDark.syntax,
    plain: colors.zinc[100],
    keyword: colors.blue[300],
    definition: colors.pink[400],
    static: colors.zinc[100],
    string: colors.orange[300],
    property: colors.zinc[400],
    punctuation: colors.zinc[500],
    tag: colors.pink[400],
  },
}
