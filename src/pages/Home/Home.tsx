import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { shipsQuery } from '../../api/queries'
import { FilterPanel } from './components/FilterPanel/FilterPanel'
import { VehicleList } from './components/VehicleList/VehicleList'
import { Loader } from '../../components/Loader/Loader'
import { MobileMenu } from '../../components/MobileMenu/MobileMenu'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { useHideBodyScroll } from '../../hooks/useHideBodyScroll'
import { VehiclesData, Vehicle } from '../../types/vehiclesData'
import './Home.scss'

export const Home: React.FC = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const [filter, setFilter] = useState({
    level: '',
    nation: '',
    type: '',
  })
  const { loading, error, data } = useQuery<VehiclesData>(shipsQuery)
  const windowWidth = useWindowWidth()

  useHideBodyScroll(isMobileOpen)

  const toggleMobileMenu = () => {
    setMobileOpen(!isMobileOpen)
  }

  const handleFilterChange = (key: string, value: string) => {
    if (value === 'Все') {
      setFilter({ ...filter, [key]: '' })
    } else {
      setFilter({ ...filter, [key]: value })
    }
  }

  const filteredShips: Vehicle[] | undefined = data?.vehicles.filter(
    (ship: Vehicle) => {
      let isMatch = true

      if (filter.level && ship.level !== Number(filter.level)) {
        isMatch = false
      }

      if (
        filter.nation &&
        ship.nation.title.toLowerCase() !== filter.nation.toLowerCase()
      ) {
        isMatch = false
      }

      if (
        filter.type.toLowerCase() &&
        ship.type.name.toLowerCase() !== filter.type.toLowerCase()
      ) {
        isMatch = false
      }

      return isMatch
    }
  )

  if (loading) return <Loader />
  if (error) return <p>Error: {error.message}</p>

  return (
    <main>
      <div className='container'>
        {windowWidth > 480 ? (
          <FilterPanel handleFilterChange={handleFilterChange} />
        ) : (
          <HiOutlineAdjustmentsHorizontal
            size={32}
            style={{ 'margin-top': '1rem' }}
            onClick={toggleMobileMenu}
          />
        )}
        {windowWidth <= 480 && (
          <MobileMenu
            toggleMobileMenu={toggleMobileMenu}
            isMobileOpen={isMobileOpen}
            handleFilterChange={handleFilterChange}
          />
        )}

        <h1>Список кораблей:</h1>
        <VehicleList ships={filteredShips} />
      </div>
    </main>
  )
}
