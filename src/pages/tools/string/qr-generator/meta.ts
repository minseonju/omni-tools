import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';
//import { QrCodeIcon } from '@iconify-icons/mdi/qrcode';

export const tool = defineTool('string', {
  path: 'qr-generator',
  name: 'Qr Code Generator',
  icon: 'material-symbols:qr-code',
  description:
    'Convert any text into a scannable QR code instantly, and download it as a PNG image for easy sharing and use anywhere.',
  shortDescription: 'Create QR Code',
  longDescription:
    'The QR code generator is a tool that generates QR codes in real time based on text entered by the user. The generated QR code can contain various information such as website addresses, contacts, and messages, and can be used for various purposes by downloading images.',
  keywords: ['qr', 'code', 'generator', 'string', '텍스트'],
  component: lazy(() => import('./index'))
});
