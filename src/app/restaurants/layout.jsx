import RestaurantsPage from '../../components/pages/RestaurantsPage';
export default function RestaurantsLayout({ children }) {
    return (
      <RestaurantsPage>
        {children}
      </RestaurantsPage>
    );
  }
