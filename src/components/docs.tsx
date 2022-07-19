import styled from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  padding: 3rem 2rem;
  margin: auto;

  @media (max-width: 768px) {
    padding: 3rem 1.25rem;
  }

  .back {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 150%;

    color: blue;
    text-decoration: none;

    display: flex;
    align-items: center;

    width: fit-content;

    p {
      display: flex;
      align-items: center;
    }
  }

  .docs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;

    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 150%;

      color: blue;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }

  article {
    max-width: 862px;
    margin: auto;
    padding: 0 2rem;

    margin-top: 3.125rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 150%;
    white-space: pre-line;

    color: black;

    * {
      line-height: 150%;
    }

    p,
    li {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 150%;

      letter-spacing: -0.01em;

      color: black;

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }

    > ul,
    > ol,
    > div > ul,
    > div > ol {
      margin-top: 1.5rem;
    }

    ul,
    ol {
      list-style-position: outside;
      padding-left: 2.5rem;

      p {
        margin-top: 0;
      }
    }

    a {
      color: blue;
    }

    p,
    li {
      margin-top: 1.5rem;
    }

    img {
      width: 100%;
      max-height: 528px;
      object-fit: contain;
      object-position: center;
    }

    pre {
      background-color: #313134;
      padding: 1rem 1.5rem;
      border-radius: 0.625rem;
      margin-top: 1.5rem;
      overflow: auto;

      code {
        color: white;
      }
    }

    blockquote {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;

      margin-top: 1.5rem;

      padding: 0.75rem 1.5rem;
      background-color: #d9dde4;
      border-left: 4px solid #605d7b;

      border-radius: 0.625rem;

      p {
        margin: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-style: normal;
      font-weight: 600;
      line-height: 120%;

      margin-top: 2rem;
      margin-bottom: 1.375rem;

      color: black;
    }

    h1 {
      text-align: left;
      font-size: 3rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 2.25rem;
      }
    }

    h2 {
      text-align: left;
      font-size: 2.5rem;
      letter-spacing: unset;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 2.25rem;
      }
    }

    h3 {
      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 2.25rem;
      }
    }

    h4 {
      font-size: 1.5rem;

      @media (max-width: 768px) {
        font-size: 0.75rem;
        margin-bottom: 2.25rem;
      }
    }

    h5 {
      font-size: 1.25rem;

      @media (max-width: 768px) {
        font-size: 0.5rem;
        margin-bottom: 2.25rem;
      }
    }

    h6 {
      font-size: 0.75rem;

      @media (max-width: 768px) {
        font-size: 0.25rem;
        margin-bottom: 2.25rem;
      }
    }

    hr {
      border: none;
      height: 0.125rem;
      width: 100%;
      background: black;
      border-radius: 1px;
      margin-top: 1.5rem;
    }

    .letters {
      ol {
        list-style-type: lower-alpha;
      }
    }

    .law {
      max-width: 60%;
      margin-left: auto;

      @media (max-width: 768px) {
        max-width: 100%;
      }

      p {
        font-size: 1rem;
        margin-top: 0.65rem;
      }
    }
  }
`;
