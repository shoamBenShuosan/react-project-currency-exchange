import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';




export default function Footer() {


  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const updateDateTime = () => {
    setCurrentDateTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className='text-center'>
        {currentDateTime.toLocaleString() + " "}<Icon icon='flag:il-4x3' /> 
      </p>
      <div>
        <div className='text-center'>
          <a href="https://github.com/shoamBenShuosan" target="_blank" rel="noopener noreferrer" >
            <Icon icon='skill-icons:github-dark' style={{ fontSize: '2em', margin: '5px' }} />
          </a>
          <a href="https://www.linkedin.com/in/shoam-ben-shosuan-58b560274/" target="_blank" rel="noopener noreferrer">
            <Icon icon='skill-icons:linkedin' style={{ fontSize: '2em' }} />
          </a>
          <p className='signature'><small>Developed by Shoam Ben-Shushan</small></p>
        </div>
      </div>
    </div>
  );
}
