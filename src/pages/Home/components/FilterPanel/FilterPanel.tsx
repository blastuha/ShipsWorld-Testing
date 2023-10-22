import {
  typeOptions,
  levelOptions,
  nationOptions,
} from '../../../../constants/constants'
import './FilterPanel.scss'

interface FilterPanelProps {
  handleFilterChange: (key: string, value: string) => void
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  handleFilterChange,
}) => {
  return (
    <div className='filter-panel'>
      <div className='filter-panel__container'>
        <label>
          Уровень:
          <select onChange={(e) => handleFilterChange('level', e.target.value)}>
            {levelOptions.map((lvl) => (
              <option
                value={lvl}
                key={lvl}
              >
                {lvl}
              </option>
            ))}
          </select>
        </label>

        <label>
          Нация:
          <select
            onChange={(e) => handleFilterChange('nation', e.target.value)}
          >
            {nationOptions.map((nation) => (
              <option
                value={nation}
                key={nation}
              >
                {nation}
              </option>
            ))}
          </select>
        </label>

        <label>
          Класс:
          <select onChange={(e) => handleFilterChange('type', e.target.value)}>
            {typeOptions.map((type) => (
              <option
                value={type}
                key={type}
              >
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
