import React, { useEffect, useState, useContext } from 'react';
import DashNav from '../../../components/DashNav';
import Loader from '../../../components/Loader';
import Sidebar from '../../../components/Sidebar';
import UpdateProfile from '../../../components/UpdateProfile';
import { useRouter } from 'next/router';


function dashboard() {
    const [Dark, setDark] = useState(false);
    const [Open, setOpen] = useState(false);
    const [loader, setLoader] = useState(true);
    const [Log, setLog] = useState(false);
    const [notice, setNotice] = useState(false);
    const session= true;

    // const [ session, loading ] = useSession()


    // const router = useRouter();

    // const GoBack = () => {
    //   router.push('/register');
    // }


    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //       if(session){
    //         router.push('/dashboard/user/updateProfile');
    //       }
    //       else{
    //         router.push('/register');
    //       }
    //     }, 200)
    
    // }, [session])
    
    return (
<>
{session && (<>
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
          fullName='John doe' email='JohnDoe@gmail.com'
        />
        <Sidebar Open={Open} fullName='John doe' email='JohnDoe@gmail.com'/>
        <UpdateProfile
          Open={Open}
          setOpen={setOpen}
          setLog={setLog}
          setNotice={setNotice}
          fullName='John doe' email='JohnDoe@gmail.com'
        />
      </div>
      </>)}
    </>
    )
}

export default dashboard;
