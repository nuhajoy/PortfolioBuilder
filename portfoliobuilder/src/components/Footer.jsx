import React from 'react';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 text-white p-2 text-center text-sm w-full mt-auto">
      © {new Date().getFullYear()} All rights reserved - Portfolio Builder
    </footer>
  );
};

export default Footer;