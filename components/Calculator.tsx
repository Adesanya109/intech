"use client"

import { FormControl, InputBase, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, styled } from '@mui/material'

import React, { useState } from 'react'



const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


const Calculator = () => {
    const [coverageType, setCoverageType] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [value, setValue] = useState(0);
    const [total, setTotal] = useState(0);


  const handleCoverageTypeChange = (event: SelectChangeEvent) => {
    setCoverageType(event.target.value as string);
  };


  const handleAgeRangeChange = (event: SelectChangeEvent) => {
    setAgeRange(event.target.value as string);
  };


  const handleValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (/^\d*\.?\d*$/.test(inputValue)) {
        setValue(inputValue as unknown as number);
    }
   
  };

  const handleComputePremium = () => {
    const basePremium = 20000
    const total = basePremium* (ageRange === 'under' ? 1.2: 0.8 ) + ((value/100.0)* (coverageType==='basic'? 1.0: 1.5))

    setTotal(total)
  }

  return (
    <div className=' min-w-72 mx-auto mt-40'>
        <div className='grid grid-cols-2 grid-rows-2 gap-4' >
        <div className='w-full'>
        <FormControl  sx={{ m: 1, minWidth: 300 }} fullWidth>
        <p className='mb-2 font-semibold text-sm'>Coverage Type</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coverageType}
          label="Age"
          onChange={handleCoverageTypeChange}
          input={<BootstrapInput />}
        >
          <MenuItem value='basic'>Basic</MenuItem>
          <MenuItem value='comprehensive'>Comprehensive</MenuItem>
        </Select>
      </FormControl>
        </div>

        <div className='w-full'>
        <FormControl  sx={{ m: 1 }} fullWidth>
        <p className='mb-2 font-semibold text-sm'>Age Range</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ageRange}
          label="Age"
          onChange={handleAgeRangeChange}
          input={<BootstrapInput />}
        >
          <MenuItem value='under'>Under 25</MenuItem>
          <MenuItem value='over'>25 and Over</MenuItem>
        </Select>
      </FormControl>
        </div>

      <div className='col-span-2'><FormControl sx={{ m: 1 }} variant="standard" fullWidth>
        {/* <InputLabel htmlFor="demo-customized-textbox">Car Value</InputLabel> */}
        <p className='mb-2 font-semibold text-sm'>Car Value</p>
        <BootstrapInput id="car-value" value={value} onChange={handleValueChange}/>
      </FormControl></div>
        </div>
        
        <div className='ml-2 w-full mt-20' onClick={handleComputePremium}>
            <button className=' bg-intechOrange w-full py-3 rounded-lg text-xl font-semibold'>Compute Premium</button>
        </div>

        <div className='grid grid-cols-2 ml-2 w-full mt-20'>
            <p className=' bg-intechOrange text-xl font-semibold p-3'>Annual Premium</p>
            <p className=' bg-black text-white text-xl font-semibold text-center p-3'>{total}</p>
        </div>
     

    </div>
  )
}

export default Calculator