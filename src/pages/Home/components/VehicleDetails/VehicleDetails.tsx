import { Vehicle } from '../../../../types/vehiclesData'
import './VechicleDetails.scss'

export const VehicleDetails: React.FC<{ ship: Vehicle }> = ({ ship }) => {
  return (
    <div className='vehicle-details'>
      <p className='vehicle-details__item'>Уровень: {ship.level}</p>
      <p className='vehicle-details__item'>Нация: {ship.nation.title}</p>
      <p className='vehicle-details__item'>Класс: {ship.type.title}</p>
    </div>
  )
}
