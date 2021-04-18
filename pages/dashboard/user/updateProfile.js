import React, { useEffect, useState, useContext } from 'react';
import DashNav from '../../../components/DashNav';
import Loader from '../../../components/Loader';
import Sidebar from '../../../components/Sidebar';
import UpdateProfile from '../../../components/UpdateProfile';
import { useRouter } from 'next/router';
import { GlobalContext } from "../../../contexts/provider";


function dashboard() {
    const [Dark, setDark] = useState(false);
    const [Open, setOpen] = useState(false);
    const [loader, setLoader] = useState(true);
    const [Log, setLog] = useState(false);
    const [notice, setNotice] = useState(false);
    const session = true;
    const [userData, setUserData] = useState({})

    let firstName;
    let lastName;

    if(userData.firstName === userData.lastName){
      firstName = userData.firstName
      lastName = 'Last Name'
    }
    else{
      firstName = userData.firstName
      lastName = userData.lastName
    }


    const user = {
      email: userData.email,
      firstName,
      lastName
      
    }


    const router = useRouter();

     // states from global context

     const {
      authDispatch,
      authState: {
        auth: { loading, error, data },
      },
    } = useContext(GlobalContext);

    // redirect unauthorized users

    const redirect = () => {
      window.location.href = '/login' 
    }

    // grab a token from local storage so as user info

    useEffect(() => {
      const token = window.localStorage.getItem('jwtToken');
      const userInfo = window.localStorage.getItem('userInfo');

      setUserData(Object.values(JSON.parse(userInfo))[1])

      if (token == null || userInfo == {}) {
          redirect()
      }
    }, [data]); 

       
    // spinner loader
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    }, []);


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
          firstName={user.firstName} lastName={user.lastName}  email={user.email}
        />
        <Sidebar Open={Open} firstName={user.firstName} lastName={user.lastName}  email={user.email}/>
        <UpdateProfile
          Open={Open}
          setOpen={setOpen}
          setLog={setLog}
          setNotice={setNotice}
          firstName={user.firstName} lastName={user.lastName} email={user.email}
        />
      </div>
      </>)}
    </>
    )
}


export default dashboard;
