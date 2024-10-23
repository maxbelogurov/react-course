import dynamic from 'next/dynamic';

const AppComponent = dynamic(() => import('../../components/app/App'), {ssr: false});

export const App = () => {
  return <AppComponent/>
};
