import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import client from './graphql/client.ts';
import { InvoiceProvider } from './context/InvoiceContext.tsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InvoiceProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </InvoiceProvider>
  </StrictMode>,
);
