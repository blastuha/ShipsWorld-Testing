import { useState } from 'react'
import { VehicleDetails } from '../VehicleDetails/VehicleDetails'
import { useWindowWidth } from '../../../../hooks/useWindowWidth'
import { Vehicle } from '../../../../types/vehiclesData'
import './VechicleList.scss'

export const VehicleList: React.FC<{ ships: Vehicle[] | undefined }> = ({
  ships,
}) => {
  const [displayCount, setDisplayCount] = useState(20)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const windowWidth = useWindowWidth()

  console.log('showFullDescription', showFullDescription)
  console.log('windowWidth', windowWidth)

  const loadMoreShips = () => {
    setDisplayCount(displayCount + 50)
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div className='vehicles'>
      <ul className='vehicles__list'>
        {ships?.slice(0, displayCount).map((ship, index: number) => (
          <li
            className='vehicle'
            key={index}
          >
            <figure className='vehicle__figure'>
              <img
                className='vehicle__image'
                src={ship.icons.large}
                alt={ship.title}
              />
              <h2 className='vehicle__title'>{ship.title}</h2>
              <VehicleDetails ship={ship} />
            </figure>
            <p
              className={`vehicle__description ${
                windowWidth < 480 && !showFullDescription ? 'short' : ''
              }`}
            >
              Описание: {ship.description}
            </p>
            {windowWidth < 480 && (
              <button
                onClick={toggleDescription}
                className='description-button'
              >
                {showFullDescription ? 'Скрыть' : 'Показать полностью'}
              </button>
            )}
          </li>
        ))}
      </ul>
      {ships && displayCount < ships.length && (
        <button
          className='vehicles__load-button'
          onClick={loadMoreShips}
        >
          Загрузить ещё
        </button>
      )}
    </div>
  )
}
