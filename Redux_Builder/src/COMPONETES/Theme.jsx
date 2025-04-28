import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_THEME } from '../REDUX/action';


const Theme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  return (
    <>
      <div className="counter">
      <button 
        onClick={() => dispatch({ type: HANDLE_THEME, payload: 'light' })}
        disabled={currentTheme === 'light'}
      >
        Switch to Light
      </button>

      <button 
        onClick={() => dispatch({ type: HANDLE_THEME, payload: 'dark' })}
        disabled={currentTheme === 'dark'}
      >
        Switch to Dark
      </button>
      </div>
    </>
  );
};

export default Theme;
