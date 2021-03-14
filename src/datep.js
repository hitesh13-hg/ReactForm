import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function Datep() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{float:"left"}}>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Datep;