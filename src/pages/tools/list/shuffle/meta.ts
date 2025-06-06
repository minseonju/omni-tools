import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';
// import image from '@assets/text.png';

export const tool = defineTool('list', {
  name: 'Shuffle',
  path: 'shuffle',
  icon: 'material-symbols-light:shuffle',
  description:
    'A tool to randomly reorder items in a list. Perfect for randomizing data, creating random selections, or generating random sequences.',
  shortDescription: 'Randomly reorder list items.',
  keywords: ['shuffle'],
  component: lazy(() => import('./index'))
});
