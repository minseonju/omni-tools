import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';

export const tool = defineTool('string', {
  path: 'text-diff-checker',
  name: 'Text Diff Checker',
  icon: 'mdi:file-compare',
  description: 'Compare two texts and highlight the differences',
  shortDescription: 'Compare two texts',
  longDescription:
    'The Text Difference Checker highlights the changes between two blocks of text, whether by character, word, or line. It visually marks additions in green and deletions in red, helping you quickly spot modifications in source code, documents, or any written content.',
  keywords: ['diff', 'compare', 'text', 'string', '하이라이트', '비교'],
  component: lazy(() => import('./index'))
});
