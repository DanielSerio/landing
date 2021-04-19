import React, { useState, useMemo, useRef,  RefObject} from 'react'
import CheckboxProps from './CheckboxProps'
import './Checkbox.css'

export default function Checkbox({ defaultChecked, onClick, ...rest}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);
  
  useMemo(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  const handleClick = () => {
    setChecked(!checked);
    if (onClick) onClick(checked || false);
  };
  return (
    <div className={`checkbox ${checked ? 'checked': ''}`} onClick={handleClick} onTouchEnd={handleClick}></div>
  );
}
