import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        padding: 0 10px;
        color:inherit;
    }

    a:hover {
        text-decoration:none;                
    } 

    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:rgba(20, 20, 20, 1);
        color:white;        
        padding:70px 0;        
    }
`;

export default globalStyles;
