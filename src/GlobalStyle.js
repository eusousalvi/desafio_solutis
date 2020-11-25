import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  :root{
    --white: #FFF;
    --light: #F3F7FA;
    --purple: #985FF3;
    --dark-purple: #46237E;
    --light-gray: #EEE;
    --medium-gray: #CCC;
    --dark-gray: #999;
    --very-dark-gray: #505050;
    --red: #DB4E4E;
    --radius: 0.9rem;
    --margin: 0.5rem;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
    --fixed-height: 4.375rem;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;
