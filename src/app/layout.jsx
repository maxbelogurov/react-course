"use client"; 

import '../styles/main.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeContextProvider } from '../components/themeContext/ThemeContextProvider';
import { UserContextProvider } from '../components/userContext/UserContextProvider';
import RootLayout from './layout.server';
import Layout from '../components/layout/Layout';

export default function ClientLayout({children}) {
  return (
    <Provider store={store}>
      <RootLayout>
        <ThemeContextProvider>
          <UserContextProvider>
              <Layout>{children}</Layout>
          </UserContextProvider>
        </ThemeContextProvider>
      </RootLayout>
    </Provider>
  )
}
