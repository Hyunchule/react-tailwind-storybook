// Tailwind CSS 글로벌 스타일 적용
import '../src/index.css';
import type { Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;