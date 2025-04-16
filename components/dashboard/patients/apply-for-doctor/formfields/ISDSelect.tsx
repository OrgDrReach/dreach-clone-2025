import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface ISDSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const ISDSelect: React.FC<ISDSelectProps> = ({ value, onChange }) => {
  return (
    <PhoneInput
      country={'in'}
      value={value}
      onChange={onChange}
      inputStyle={{
        width: '100%',
        height: '40px',
        fontSize: '16px',
        paddingLeft: '48px',
        borderRadius: '4px',
        border: '1px solid #d1d5db',
      }}
      buttonStyle={{
        border: '1px solid #d1d5db',
        borderRight: 'none',
        borderRadius: '4px 0 0 4px',
        backgroundColor: 'white',
      }}
      dropdownStyle={{
        width: '300px',
      }}
    />
  );
};

export default ISDSelect;