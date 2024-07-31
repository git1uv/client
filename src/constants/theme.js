const ALIGN = {
	// FLEX
    ROW_CENTER: `
      display: flex;     
      justify-content: center;     
      align-items: center;    
    `,
    COLUMN_CENTER: `
      display: flex;     
      flex-direction: column;     
      justify-content: center;     
      align-items: center;  
    `
};

const RESPONSIVE_SIZE = {
  MOBILE: '430px',
  PC: '1024px',
};
  
const FONT_SIZE = {
  XS: '0.75rem',
  SM: '0.875rem',
  BASE: '1rem',
  LG: '1.125rem',
  XL: '1.25rem',
  TWO_XL: '1.5rem',
  THREE_XL: '1.875rem',
  FOUR_XL: '2.25rem',
  FIVE_XL: '3rem',
  SIX_XL: '3.75rem',
  SEVEN_XL: '4.5rem',
};

  const WINDOW_SIZE = {
    MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
    PC: `screen and (max-width: ${RESPONSIVE_SIZE.PC})`,
  };

const theme = { ALIGN, WINDOW_SIZE, RESPONSIVE_SIZE, FONT_SIZE  };

export default theme;