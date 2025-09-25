import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      customBlue: '#1e3a8a',
      darkBlue: '#0d1b2a',
      TealBlue: '#1d5779',
      Red: '#C00000',
      darkred: '#5f0e2d',
      Blue: '#1359D1',
      white: '#ffffff',
      gray3: '#101B31',
      black: '#000000',
      purple: '#ca1ccae3',
      white1: '#BAD4EF',
      gray: '#D9D9D9',
      gray2: '#8A8A8A',
      gray1: '#E6E6E6',
      orange: '#FF8900',
      yellow: '#ffea00',
      green: '#00AC4F',
    },
    extend: {
       width: {
    card: "877px",
    form: "1200px",
  },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundClip: {
        text: 'text', // Enables bg-clip-text explicitly
      },
      
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to right, #ffffff, #1565EB, #4e61ca)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        },
      });
    }),
    


  ],
};

export default config;



// import plugin from 'tailwindcss/plugin';
// import lineClamp from '@tailwindcss/line-clamp'; // ✅ Import plugin
// import type { Config } from 'tailwindcss';

// const config: Config = {
//   darkMode: 'class',
//   content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//       '2xl': '1536px',
//     },
//     colors: {
//       customBlue: '#1e3a8a',
//       darkBlue: '#0e1755',
//       TealBlue: '#1d5779',
//       Red: '#C00000',
//       darkred: '#5f0e2d',
//       Blue: '#1565EB',
//       white: '#ffffff',
//       pink: '#cc3e8c',
//       black: '#000000',
//       purple: '#ca1ccae3',
//       green: '#00ff00',
//       gray: '#4b5563',
//       gray2: '#ccc4c4ad',
//       orange: '#ff7f00',
//       orange2: '#ff7f00ad',
//       yellow: '#ffea00',
//       yellow2: '#ffea00ad',
//     },
//     extend: {
//       spacing: {
//         72: '18rem',
//         84: '21rem',
//         96: '24rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       },
//       backgroundClip: {
//         text: 'text',
//       },
//     },
//   },
//   plugins: [
//     plugin(function ({ addUtilities }) {
//       addUtilities({
//         '.text-gradient': {
//           backgroundImage: 'linear-gradient(to right, #ffffff, #1565EB, #4e61ca)',
//           backgroundClip: 'text',
//           WebkitBackgroundClip: 'text',
//           color: 'transparent',
//           WebkitTextFillColor: 'transparent',
//         },
//       });
//     }),
//     lineClamp, // ✅ Enable line-clamp support
//   ],
// };

// export default config;


