import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
  options: {
    name: 'Century Logistics Component Library'
  },
  backgrounds: [
    { name: 'base', value: '#f9f9f9', default: true },
    { name: 'dark', value: '#333333' },
  ],
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      tabletLarge: {
        name: 'Tablet Large',
        styles: {
          width: '1024px',
          height: '800px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1360px',
          height: '1024pxpx',
        },
      },
      iPhone5: {
        name: 'iPhone 5',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      iPhone8: {
        name: 'iPhone 8',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      iPhoneX: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
      iPhoneXR: {
        name: 'iPhone XR',
        styles: {
          width: '414px',
          height: '896px',
        },
      },
      pixel: {
        name: 'Google Pixel',
        styles: {
          width: '412px',
          height: '732px',
        },
      },
      pixel3: {
        name: 'Google Pixel 3',
        styles: {
          width: '412px',
          height: '824px',
        },
      },
      pixel4XL: {
        name: 'Google Pixel 4 XL',
        styles: {
          width: '411px',
          height: '869px',
        },
      },

      iPadMini: {
        name: 'iPad Mini',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },

      iPad4: {
        name: 'iPad 4',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      iPadPro: {
        name: 'iPad Pro',
        styles: {
          width: '1024px',
          height: '1366px',
        },
      },
      desktop1920: {
        name: 'Desktop 1920x1080',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
      desktop1366: {
        name: 'Desktop 1366x768',
        styles: {
          width: '1366px',
          height: '768px',
        },
      },
      desktop1400: {
        name: 'Desktop 1440x900',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    }
  }
});
