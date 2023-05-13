import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface CheckboxProps {
  label: string
  value: string
  isSelected: boolean
  onClickHandler: (value: string) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, value, isSelected, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected)


  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        className={classes.checkbox}
      />
      {label}
    </label>
  )
}
