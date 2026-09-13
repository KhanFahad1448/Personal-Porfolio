export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-10">
      <p className="text-xs text-gray-300">Fahad Akhtar © {new Date().getFullYear()}</p>

      <div className="my-4">
        <svg viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="45">
          <rect x="128" y="60" width="150" height="180" rx="8" stroke="#1F2667" strokeOpacity="0.9" strokeWidth="14" />
          <rect x="128" y="60" width="150" height="180" rx="8" stroke="url(#footerGradient)" strokeWidth="14" />
          <path d="M100 240 L306 240 L336 280 L70 280 Z" stroke="#1F2667" strokeOpacity="0.9" strokeWidth="14" strokeLinejoin="round" />
          <path d="M100 240 L306 240 L336 280 L70 280 Z" stroke="url(#footerGradient)" strokeWidth="14" strokeLinejoin="round" />
          <path d="M188 110 L155 150 L188 190" stroke="#1F2667" strokeOpacity="0.9" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M188 110 L155 150 L188 190" stroke="url(#footerGradient)" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M218 110 L251 150 L218 190" stroke="#1F2667" strokeOpacity="0.9" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M218 110 L251 150 L218 190" stroke="url(#footerGradient)" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="footerGradient" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1595B6" />
              <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
        <li>
          <a href="https://www.linkedin.com/in/fahad-akhtar-1119b017b/" target="_blank" rel="noreferrer">
            <svg className="w-5 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_khan__fahad_/" target="_blank" rel="noreferrer">
            <svg className="w-5 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:fk9719650@gmail.com" target="_blank" rel="noreferrer">
            <svg className="w-5 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/KhanFahad1448" target="_blank" rel="noreferrer">
            <svg className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM265.8 407.7c0-1.8 0-6 .1-11.6 .1-11.4 .1-28.8 .1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-26.6-7.5-56.6-7.5-83.2 0 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7 .1 30.6 0 4.8 .1 8.6 .1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}
