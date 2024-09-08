import React, { useState } from 'react'
import Registrationartisan from './pages/registration/Registrationartisan';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userdata, setUserData] = useState([]);
    const [finalData, setFinalData] = useState({});
  return (
    <div>
      <multiStepContext.Provider value={(currentStep, setStep, userdata, setUserData, finalData, setFinalData)}>
        <Registrationartisan />
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
