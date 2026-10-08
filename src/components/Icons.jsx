import React from 'react';

export const GithubIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const PythonIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.91 2C6.96 2 7.33 4.14 7.33 4.14L7.34 6.36H12.02V7.05H5.06C2.69 7.05 2 9.07 2 11.89C2 14.88 3.57 15.06 4.9 15.06H6.18V13.31C6.18 10.87 7.9 10.87 7.9 10.87H12.56C14.88 10.87 14.88 8.65 14.88 8.65V4.32C14.88 4.32 15.03 2 11.91 2ZM9.05 3.32C9.56 3.32 9.97 3.73 9.97 4.24C9.97 4.75 9.56 5.16 9.05 5.16C8.54 5.16 8.13 4.75 8.13 4.24C8.13 3.73 8.54 3.32 9.05 3.32ZM12.09 22C17.04 22 16.67 19.86 16.67 19.86L16.66 17.64H11.98V16.95H18.94C21.31 16.95 22 14.93 22 12.11C22 9.12 20.43 8.94 19.1 8.94H17.82V10.69C17.82 13.13 16.1 13.13 16.1 13.13H11.44C9.12 13.13 9.12 15.35 9.12 15.35V19.68C9.12 19.68 8.97 22 12.09 22ZM14.95 20.68C14.44 20.68 14.03 20.27 14.03 19.76C14.03 19.25 14.44 18.84 14.95 18.84C15.46 18.84 15.87 19.25 15.87 19.76C15.87 20.27 15.46 20.68 14.95 20.68Z"/>
  </svg>
);
