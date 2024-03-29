import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`   
:root{
    --background: #eff7f9;
    --black:#0a0b10;
    --purple:#803bec;
    --pink:#e5a1f8;
    --white:#fff;
    --nav:#393E46;
    --nav2:#3f3d56;
    --yellow: #FFD369;
    --black2: #222831;
    --white2: #EEEEEE;
    --pink: #F95959;
    --pink2: #9f7f7f;
    --pink3: #e16483;
    --nav3:#4a4a4a;

 }
 *,*::before,*::after{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family: 'Poppins', sans-serif;
 }
 html{
   ${"" /* overflow-y: scroll; */}
   scroll-behavior:smooth;
   
 }
     body,
     html,
     a {
         font-family: 'Poppins', sans-serif;
             }
     body {
         margin:0;
         padding:0;
         border: 0;
         outline: 0;
         background: var(--background);
         overflow-x: hidden;
     }
     h1,
     h2,
     h3,
     h4,
     h5,
     h6 {
         margin:0;
         padding:0;
     }
     a {
         text-decoration: none;
         outline: none;
     }
     button{
         border:none;
         outline:none;
         &:focus{
             outline:none;
         }
     }
     *:focus {
         outline: none;
     }
     img,svg{
         width:100%;
         height:auto;
     }



`;
