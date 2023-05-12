'use client'

import React from 'react'

import { Category } from '../../../../payload/payload-types'
import { HR } from '../../../_components/HR'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  return (
    <div className={classes.filters}>
     
    </div>
  )
}

export default Filters
