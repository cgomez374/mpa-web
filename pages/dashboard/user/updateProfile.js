import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DashNav from '../../../components/DashNav';
import Loader from '../../../components/Loader';
import Sidebar from '../../../components/Sidebar';
import UpdateProfile from '../../../components/UpdateProfile';


function dashboard() {
    const [Dark, setDark] = useState(false);
    const [Open, setOpen] = useState(false);
    const [loader, setLoader] = useState(true);
    const [Log, setLog] = useState(false);
    const [notice, setNotice] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    }, []);
    
    return (
<>
      <div
        className={`${
          loader ? 'tw-flex tw-items-center tw-justify-center tw-h-screen' : 'tw-hidden'
        }`}
      >
        <Loader />
      </div>
      <div
        className={`${
          loader ? 'tw-hidden' : 'tw-grid'
        }   tw-grid-cols-1 lg:tw-grid-cols-main tw-font-body  tw-grid-rows-main`}
      >
        <DashNav
          Open={Open}
          setOpen={setOpen}
          
        />
        <Sidebar Open={Open} />
        <UpdateProfile
          Open={Open}
          setOpen={setOpen}
          setLog={setLog}
          setNotice={setNotice}
        />
      </div>
    </>
    )
}

export default dashboard;
