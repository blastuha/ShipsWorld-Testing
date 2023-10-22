import React from 'react'
import { FilterPanel } from '../../pages/Home/components/FilterPanel/FilterPanel'
import { IoClose } from 'react-icons/io5'
import './MobileMenu.scss'

interface MobileMenuProp {
  isMobileOpen: boolean
  toggleMobileMenu: () => void
  handleFilterChange: (key: string, value: string) => void
}

export const MobileMenu: React.FC<MobileMenuProp> = ({
  toggleMobileMenu,
  isMobileOpen,
  handleFilterChange,
}) => {
  return (
    <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
      <IoClose
        onClick={toggleMobileMenu}
        size={32}
      />
      <div>
        <FilterPanel handleFilterChange={handleFilterChange} />
      </div>
    </div>
  )
}
