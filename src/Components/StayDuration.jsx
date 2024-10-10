import React, { useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
import { useOutsideClick } from '../utils/useOutsideClick'
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const StayDuration = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const pickerRef = useRef(null);

  useOutsideClick(pickerRef, () => setShowDateRangePicker(false));

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className='relative lg:w-[350px] w-full bg-white rounded-md flex gap-3 p-3'>
      <Calendar className='text-gray-600'/>
      <input
        type="text"
        readOnly
        value={`In: ${format(dateRange[0].startDate, 'MM/dd/yyyy')} - Out: ${format(dateRange[0].endDate, 'MM/dd/yyyy')}`}
        onClick={() => setShowDateRangePicker(!showDateRangePicker)}
        placeholder="Select Date Range"
        className='w-full bg-none cursor-pointer outline-none dark:text-white text-sm bg-transparent '
      />

      {showDateRangePicker && (
        <div 
          ref={pickerRef} 
          style={{  zIndex: 1000 }}
          className='absolute right-[-20px] top-12'
          >
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            className="text-black"
            staticRanges={[]} 
            inputRanges={[]}
          />
        </div>
      )}
    </div>
  );
};

export default StayDuration;
