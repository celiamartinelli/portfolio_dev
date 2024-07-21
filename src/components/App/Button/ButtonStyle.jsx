// import React from 'react';

// const Button = ({ theme = 'light', size = 'md', text = 'Share' }) => {
//   const baseStyle =
//     'flex items-center justify-center rounded-full p-2 shadow-lg';
//   const lightStyle = 'bg-white text-gray-700 hover:bg-gray-100';
//   const darkStyle = 'bg-gray-800 text-gray-400 hover:bg-gray-700';
//   const sizeStyle = {
//     sm: 'w-8 h-8',
//     md: 'w-10 h-10',
//     lg: 'w-12 h-12',
//   };

//   const iconStyle = 'w-4 h-4 fill-current';

//   return (
//     <button
//       type="button" // Ajout de l'attribut type
//       aria-label={text} // Utilisation de text comme label accessible
//       className={`${baseStyle} ${theme === 'light' ? lightStyle : darkStyle} ${
//         sizeStyle[size]
//       }`}
//     >
//       texte {/* Utilisation de la prop text */}
//       <svg
//         className={iconStyle}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         aria-hidden="true" // Cacher l'icône aux lecteurs d'écran puisque le bouton a déjà un label textuel
//       >
//         <path d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.88L8.91 12.7C8.96 12.47 9 12.24 9 12s-.04-.47-.09-.7l7.04-4.18c.51.51 1.19.81 1.95.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.05 8.88C7.54 8.38 6.86 8.08 6.1 8.08 4.44 8.08 3.1 9.42 3.1 11.08s1.34 3 3 3c.76 0 1.44-.3 1.95-.8l7.14 4.19c-.05.22-.09.45-.09.68 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
//       </svg>
//     </button>
//   );
// };
// export default Button;
