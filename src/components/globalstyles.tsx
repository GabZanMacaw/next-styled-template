import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  .no-scroll {
    overflow: hidden;
  }

  .mob {
    @media (min-width: 769px) {
      display: none !important;
    }
  }

  .pc {
    @media (max-width: 768px) {
      display: none !important;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /**************/
  /* Animations */
  /**************/

  .fadeIn {
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeDown {
    animation: fadeDown 1s;
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fadeUp {
    animation: fadeUp 1s;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fadeLeft {
    animation: fadeLeft 1s;
  }

  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .fadeRight {
    animation: fadeRight 1s;
  }

  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default GlobalStyle;
