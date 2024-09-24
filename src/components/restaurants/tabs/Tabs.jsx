import './Tabs.css'

export default function Tabs({restaurants, activeRestaurant, onClick}) {
  return (
    <div>
      {restaurants.map(restaurant =>
        <button
          key={ restaurant.id }
          className={ activeRestaurant === restaurant.name ? 'btn active' : 'btn' }
          onClick={ () => onClick(restaurant) }>
          { restaurant.name }
        </button>
      )}
    </div>
  )
}
