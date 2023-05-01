'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'



const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

