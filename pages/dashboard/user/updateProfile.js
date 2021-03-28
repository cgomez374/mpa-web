import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// import Content from '../components/dashboard/Content';
// import Footer from '../components/dashboard/Footer';
import DashNav from '../../../components/DashNav';
import Loader from '../../../components/Loader';
import Sidebar from '../../../components/Sidebar';
import UpdateProfile from '../../../components/UpdateProfile';
// import Sidebar from '../components/dashboard/Sidebar';

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
    
  
    // const history = useHistory();
    // useEffect(() => {
    //   if (!localStorage.token) {
    //     history.push('/login');
    //   }
    // }, []);

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
        {/* <Footer dark={Dark} /> */}
      </div>
    </>
    )
}

export default dashboard;
