import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { theme } from "./assets/theme/theme"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={ theme }>
    <App />
  </ChakraProvider>
);

