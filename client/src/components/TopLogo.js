import React, {useEffect} from 'react';
import {useTheme} from 'contexts/themeContext';
import {useSelector} from 'react-redux';

function TopLogo() {
  const {token} = useSelector((store) => store.auth);
  const {isDark} = useTheme();

  return (
    <>
      {token && (
        <div className="flex justify-center my-6">
          <div className="w-16">
            <img
              src={`/images/logo-${isDark ? 'white' : 'black'}.png`}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default TopLogo;
