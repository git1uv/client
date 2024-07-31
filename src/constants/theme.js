
const RESPONSIVE_SIZE = {
    MOBILE: '430px',
    PC: '1024px',
  };
  const WINDOW_SIZE = {
      MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
      PC: `screen and (max-width: ${RESPONSIVE_SIZE.PC})`,
  };
  const FONT_SIZE = {
  };
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
    `,
  };
const COLOR = {
    MAIN: {
    },
  };
const theme = { WINDOW_SIZE, ALIGN, COLOR, FONT_SIZE  };

export default theme;