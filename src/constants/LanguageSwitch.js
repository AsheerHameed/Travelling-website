import React from 'react'
import "./LanguageSwitch.css";
const LanguageSwitch = () => {
  return (
    <div className='language-switch-container'>
      <select>
        <option value="someOption">EN</option>
        <option value="otherOption">AR</option>
        <option value="otherOption">ES</option>
        <option value="otherOption">FR</option>
      </select>
    </div>
  );
}

export default LanguageSwitch