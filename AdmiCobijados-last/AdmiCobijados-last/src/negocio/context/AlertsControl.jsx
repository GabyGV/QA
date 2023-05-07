import React, { createContext, useContext, useState } from 'react'

const context = createContext();

const useAlerts = () => {
    const Alertcontext = useContext(context);
    return Alertcontext;
  };

function AlertsControl({children}) {
    const [openModal, setOpenModal] = useState(false);

    const onClickButton = () => {
      setOpenModal((prevState) => !prevState);
      setTimeout(function(){
        setOpenModal((prevState) => !prevState);
      }, 1200);
    };

  return (
    <context.Provider value={{openModal, onClickButton}}>
        {children}
    </context.Provider>
  )
}

export {AlertsControl, useAlerts}