/**
 * Config
 */

const package = require('../package.json');
const merge = require('deepmerge');

const colors = {
  'text': 'white',
  'text-alt': 'blue-l-3',
  'text-primary': 'blue-l-1',
  'text-secondary': 'green-l-3',
  'text-tertiary': 'yellow-l-2',
  'hyperlinks': 'blue-l-1',
  'hyperlinks-hover': 'blue-l-3',
  'hyperlinks-visited': 'blue-l-3',
  'background': 'scale-1',
  'smoothing': true,

  'card-header': 'scale-3',
  'card-body': 'scale-4',

  'modal': {
    'text': 'scale-1',
    'text-alt': 'scale-2',
    'background': 'blue-l-3',
    'hyperlinks': 'scale-4',
    'hyperlinks-hover': 'scale-3',
    'hyperlinks-visited': 'scale-3',
    'smoothing': false
  },

  'input': {
    'text': 'scale-1',
    'background': 'white',
    'border': 'transparent'
  },

  'option': {
    'text': 'blue',
    'background': 'scale-2',
    'border': 'transparent',

    'text-hover ': 'blue-l-3',
    'border-hover': 'blue-l-3',
    'background-hover': 'scale-0',

    'text-focus': 'blue-l-3',
    'border-focus': 'blue-l-3',
    'background-focus': 'scale-0',

    'text-checked': 'blue-l-3',
    'background-checked': 'scale-0',

    'graphic-checkbox': 'tranparent',
    'graphic-checkbox-checked': 'scale-0'
  },

  'statuses': {
    'primary': {
      'text': 'scale-2',
      'background': 'blue-l-1',
    },
    'secondary': {
      'text': 'scale-2',
      'background': 'green-l-3',
    },
    'tertiary': {
      'text': 'scale-2',
      'background': 'yellow-l-2',
    },
    'alt': {
      'text': 'scale-1',
      'background': 'blue-l-3'
    }
  },

  'button': {
    'primary': {
      'text': 'blue-l-1',
      'text-hover': 'blue-l-2',
      'background': 'scale-2',
      'background-hover': 'scale-0'
    },
    'secondary': {
      'text': 'green-l-3',
      'text-hover': 'green-l-3',
      'background': 'scale-2',
      'background-hover': 'scale-0'
    },
    'tertiary': {
      'text': 'yellow-l-2',
      'text-hover': 'yellow-l-3',
      'background': 'scale-2',
      'background-hover': 'scale-0'
    }
  },

  'shadow-up': '0 3px 12px 2px rgba(0, 0, 0, 0.15)',

  'code': {
    'text': 'blue-l-2',
    'text-base': 'blue-l-2',
    'text-keyword': 'blue',
    'text-javascript': 'blue-l-2',
    'text-css': 'blue-l-2',
    'text-comment': 'blue-l-3',
    'text-string': 'green-l-3',
    'text-symbol': 'yellow-l-2',
    'text-code': 'green-l-3',
    'background': 'scale-3',
    'border': 'transparent'
  }
};

const light = merge(colors, {
  'text': 'default-1',
  'text-alt': 'default-4',
  'text-primary': 'blue',
  'text-secondary': 'green',
  'text-tertiary': 'yellow-d-1',
  'hyperlinks': 'blue',
  'hyperlinks-hover': 'default-4',
  'hyperlinks-visited': 'default-4',
  'background': 'scale-1',
  'smoothing': false,

  'card-header': 'scale-2',
  'card-body': 'scale-1',

  'modal': {
    'text': 'default-1',
    'text-alt': 'scale-2',
    'background': 'blue-l-3',
    'hyperlinks': 'blue',
    'hyperlinks-hover': 'default-1',
    'hyperlinks-visited': 'default-1'
  },

  'input': {
    'text': 'default-1',
    'background': 'white',
    'border': 'default-1'
  },

  'option': {
    'text': 'blue',
    'background': 'scale-2',
    'border': 'transparent',

    'text-hover ': 'blue-l-3',
    'border-hover': 'blue-l-3',
    'background-hover': 'scale-0',

    'text-focus': 'blue-l-3',
    'border-focus': 'blue-l-3',
    'background-focus': 'scale-0',

    'text-checked': 'blue-l-3',
    'background-checked': 'scale-0',

    'graphic-checkbox': 'tranparent',
    'graphic-checkbox-checked': 'scale-0'
  },

  'statuses': {
    'primary': {
      'text': 'scale-2',
      'background': 'blue-l-1',
    },
    'secondary': {
      'text': 'scale-2',
      'background': 'green-l-3',
    },
    'tertiary': {
      'text': 'scale-2',
      'background': 'yellow-l-2',
    },
    'alt': {
      'text': 'scale-1',
      'background': 'blue-l-3'
    }
  },

  'button': {
    'primary': {
      'text': 'blue',
      'text-hover': 'default-4',
      'background': 'scale-2',
      'background-hover': 'blue-l-3'
    },
    'secondary': {
      'text': 'green',
      'text-hover': 'green',
      'background': 'scale-2',
      'background-hover': 'blue-l-3'
    },
    'tertiary': {
      'text': 'yellow-d-1',
      'text-hover': 'yellow-d-2',
      'background': 'scale-2',
      'background-hover': 'blue-l-3'
    }
  },

  'code': {
    'text': 'blue-l-2',
    'text-base': 'blue-l-2',
    'text-keyword': 'blue',
    'text-javascript': 'blue-l-2',
    'text-css': 'blue-l-2',
    'text-comment': 'blue-l-3',
    'text-string': 'green-l-3',
    'text-symbol': 'yellow-l-2',
    'text-code': 'green-l-3',
    'background': 'scale-3',
    'border': 'transparent'
  }
});

module.exports = {
  'output': `"${process.env.PWD}/src/config/_tokens.scss"`,
  'version': package.version,
  'cdn': `"https://cdn.jsdelivr.net/gh/cityofnewyork/nyco-wnyc-patterns@v${package.version}/dist/"`,
  'google-fonts': '"https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i%7CMontserrat:400,400i,700"',
  'languages': [
    'default',
    'ar',
    'es',
    'kr',
    'ur',
    'tc'
  ],
  'languages-rtl': [
    'ar',
    'ur'
  ],
  'font-family': {
    'system': [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      '"Helvetica Neue"',
      'sans-serif'
    ],
    'nyc': [
      '"Helvetica Neue Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'inherit': 'inherit',
    'primary': [
      '"Montserrat"',
      'sans-serif'
    ],
    'primary-ar': [],
    'primary-zh-hant': [],
    // ...
    'secondary': [
      '"Lato"',
      'sans-serif'
    ],
    'secondary-ar': [],
    'secondary-zh-hant': [],
    // ...
    'code': ['monospace']
  },
  'font': {
    'body': 'primary',
    'h1': 'primary',
    'h2': 'primary',
    'h3': 'primary',
    'blockquote': 'primary',
    'h4': 'primary',
    'h5': 'primary',
    'h6': 'secondary',
    'p': 'secondary',
    'button': 'secondary',
    'tables': 'secondary',
    'option': 'secondary',
    'question': 'secondary',
    'code': 'code',
  },
  'font-weight': {
    'body': 'normal',
    'h1': 'bold',
    'h2': 'bold',
    'h3': 'bold',
    'blockquote': 'normal',
    'h4': 'normal',
    'h5': 'bold',
    'h6': 'normal',
    'p': 'normal',
    'small': 'normal',
    'button': 'bold',
    'tables': 'normal',
    'normal': 'normal',
    'bold': 'bold',
    'option': 'bold',
    'question': 'normal',
    'code': 'normal'
  },
  'font-style': {
    'body': 'normal',
    'h1': 'normal',
    'h2': 'normal',
    'h3': 'normal',
    'blockquote': 'normal',
    'h4': 'normal',
    'h5': 'normal',
    'h6': 'italic',
    'p': 'normal',
    'small': 'normal',
    'button': 'normal',
    'tables': 'normal',
    'question': 'normal',
    'normal': 'normal',
    'italic': 'italic'
  },
  'font-size': {
    'body': '1rem',
    'h1': '3rem',
    'h2': '2.5rem',
    'h3': '2rem',
    'blockquote': '2rem',
    'h4': '1.5rem',
    'h5': '1rem',
    'h6': '1rem',
    'p': '0.9rem',
    'small': '0.72rem',
    'button': '1rem',
    'tables': '0.8rem',
    'option': 'inherit',
    'question': 'inherit',
    'code': '0.72rem'
  },
  'line-height': {
    'normal': 'normal',
    'body': 'normal',
    'h1': '1.2',
    'h2': '1.3',
    'h3': '1.3',
    'blockquote': '1.3',
    'h4': '1.1',
    'h5': 'normal',
    'h6': 'normal',
    'p': '1.6',
    'small': 'normal',
    'button': 'normal',
    'tables': 'normal',
    'option': 'normal',
    'question': 'normal',
    'code': '1.9'
  },
  'typography': {
    'small': '16px',
    'mobile': '18px',
    'tablet': '20px',
    'desktop': '22px',
    'margin-bottom': '1rem',
    'list-indent': '1.5rem'
  },
  'links': {
    'font-weight': 'bold',
    'text-decoration': 'underline'
  },
  'scales': {
    'default': [0, 1, 2, 3, 4],
    'dark':    [0, 1, 2, 3, 4],
    'mid':     [0, 1, 2, 3, 4],
    'light':   [0, 1, 2, 3, 4]
  },
  'colors': {
    'scale-0': 'var(--color-scale-0)',
    'scale-1': 'var(--color-scale-1)',
    'scale-2': 'var(--color-scale-2)',
    'scale-3': 'var(--color-scale-3)',
    'scale-4': 'var(--color-scale-4)',
    'default-0': '#03142C',
    'default-1': '#031837',
    'default-2': '#071F42',
    'default-3': '#0C264D',
    'default-4': '#122F5A',
    'dark-0': '#171717',
    'dark-1': '#1C1C1C',
    'dark-2': '#252525',
    'dark-3': '#2D2D2D',
    'dark-4': '#3D3D3D',
    'mid-0': '#203A60',
    'mid-1': '#284777',
    'mid-2': '#2A4E83',
    'mid-3': '#31568C',
    'mid-4': '#336599',
    'light-0': '#FFFFFF',
    'light-1': '#FFFFFF',
    'light-2': '#FCFCFC',
    'light-3': '#F7F7F7',
    'light-4': '#F0F0F0',
    'blue': '#1E78BE',
    'blue-l-1': '#3194E0',
    'blue-l-2': '#68B7F4',
    'blue-l-3': '#C9EEFE',
    'green': '#006333',
    'green-l-1': '#008E46',
    'green-l-2': '#4BAC4C',
    'green-l-3': '#A8DD7C',
    'yellow-d-2': '#755C00',
    'yellow-d-1': '#8F6F00',
    'yellow': '#FFD029',
    'yellow-l-1': '#FAD457',
    'yellow-l-2': '#F6D772',
    'yellow-l-3': '#FDE9A6',
    'red-l-1': '#F1647C',
    'red-l-2': '#FC9CAC',
    'black': '#000000',
    'white': '#FFFFFF',
    'transparent': 'rgba(255, 255, 255, 0)',
    'inherit': 'inherit'
  },
  'color-modes': {
    'default': colors,
    'light': light
  },
  // Based on minimum width for devices
  'screens': {
    'desktop': '1112px',
    'tablet': '768px',
    'mobile': '480px',
    'small': '400px',
    // There is a max width mixin but its is discouraged over min width
    'max-width-offset': '0.02px'
  },
  'grid': '8px',
  'dimensions': {
    'spacing-base': 3, // × grid
    'mobile-menu-width': '80vw',
    'content-width': '896px',
    'site-max-width': '1440px',
    'site-min-width': '320px',
    'navigation-logo': '128px',
    'navigation-height': '54px',
    'navigation-height-mobile': '80px', // size is actually determined by padding, etc. this is a reference for other components
    'footer-height-small': '488px',
    'footer-height-mobile': '581px',
    'footer-height-tablet': '427px',
    'side-bar-width': '18.5rem',
    'side-bar-width-small': '12.5rem',
    'topbar-height': '80px',
    'webshare-fallback': '432px'
  },
  'z': {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    'footer': 0,
    'search': 1000,
    'navigation': 1010,
    'mobile-menu': 1020,
    'auto': 'auto',
  },
  'animate': {
    'ease-in': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', // Quint
    'ease-out': 'cubic-bezier(0.23, 1, 0.32, 1)', // Quint
    'duration': '0.5s',
    'timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'
  },
  'border-widths': {
    '0': '0',
    'default': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '5': '5px',
    '6': '6px',
    '7': '7px',
    '8': '8px'
  },
  'padding': {
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    '7': '56px',
    '8': '64px'
  },
  'margin': {
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    '7': '56px',
    '8': '64px',
    'auto': 'auto'
  },
  'icons-sizes': {
    'default': ['1rem', '1rem'], // = the base line height
    '1': ['8px', '8px'],
    '2': ['16px', '16px'],
    '3': ['24px', '24px'],
    '4': ['32px', '32px'],
    '5': ['40px', '40px'],
    '6': ['48px', '48px'],
    '7': ['56px', '56px'],
    '8': ['64px', '64px'],
    'logo-google-translate': ['175px', '16px'],
    'logo-standard-menu-item': ['130px', '18px'],
    'logo-homepage': ['186px', '18px'],
    'logo-stacked-menu-item': ['100px', '32px'],
    'logo-nyco-menu-item': ['150px', '17px'],
    'logo-partnership-footer': ['206px', '80px'],
    'logo-nyc-copyright': ['41px', '15px']
  },
  'buttons': {
    'inner-size': '1rem',
    'radius': '5px',
    'radius-tag': '50px'
  },
  'inputs': {
    'inner-size': '1rem',
    'radius': '0px',
    'border-style': 'solid',
    'border-width': '2px',
    'search-icon': ['24px', '24px']
  },
  'selects': {
    'inner-size': '1rem',
    'radius': '5px',
    'border-style': 'solid',
    'border-width': '2px',
    'border-width': '2px',
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  'options': {
    'inner-size': '1rem',
    'radius': '5px',
    'border-style': 'solid',
    'border-width': '2px',
    'stroke-width': '2px',
    'stroke-line': 'round'
  },
  'layouts': {
    'page-min': true,
    'page-max': true,
    'page-min-max': true,
    'layout-rows': true,
    'layout-rows-gutter': true,
    'layout-four-columns': true,
    'layout-four-columns-gutter': true,
    'layout-three-columns': true,
    'layout-three-columns-gutter': true,
    'layout-two-columns': true,
    'layout-two-columns-gutter': true,
    'layout-sidebar': true,
    'layout-sidebar-small': true,
    'layout-sidebar-gutter': true,
    'layout-sidebar-small-gutter': true,
    'layout-content': true,
    'layout-topbar': true
  },
  'shadows': {
    'up': 'var(--shadow-up)',
    'none': 'none'
  }
};
