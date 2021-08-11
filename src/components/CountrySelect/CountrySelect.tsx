import { ICountrySelect } from './types'
import * as React from 'react'
import { IFlag } from '../Flag/types'
import { countries } from './data'

/**
 * Components
 */
import { Select } from '../Select'

/**
 * Country select
 */
const CountrySelect: React.FC<ICountrySelect.IProps> = ({ id, value, onChange }) => (
  <Select
    id={id}
    filterable
    options={countries.map((country) => ({
      value: country.alpha2,
      label: country.label,
      flag: { name: country.alpha2 as IFlag.IProps['name'] }
    }))}
    value={value}
    onChange={onChange}
  />
)

export default CountrySelect
