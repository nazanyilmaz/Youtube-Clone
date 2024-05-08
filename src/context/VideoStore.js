import React, {createContext, useEffect, useState} from 'react';
const VideoContext = createContext();
const VideoProvider = ({children}) => {
  const [vvideos, setVvideos] = useState([]);

  return (
    <VideoContext.Provider
      value={{
        vvideos,
        setVvideos,
      }}>
      {children}
    </VideoContext.Provider>
  );
};

export {VideoContext, VideoProvider};
