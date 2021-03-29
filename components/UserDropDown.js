import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/client';
import { FaBars, FaRegEnvelope, FaRegUser, FaSearch } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { IoMoonOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { useRouter } from 'next/router';

function UserDropDown({setNotice, notice, Log, setLog , ProfilePic, fullName, email}) {
  const Router = useRouter();
    return (
        <div>
        <img
          className="tw-w-9 tw-h-9 tw-rounded-full  tw-object-cover tw-cursor-pointer tw-relative "
          src={ProfilePic || `../../assets/images/profile.png`}
          alt="profile"
          onClick={() => {setLog(!Log); if(notice==true){ setNotice(notice==false); } }}
        />

        <div className={`${Log ? 'tw-block' : 'tw-hidden '}`}>
          <div className="tw-bg-white tw-rounded-md tw-text-gray-700 tw-w-36 tw-mt-2 tw-shadow-md tw-absolute tw-z-20  tw-right-5">
            <div className="tw-flex tw-p-2 tw-border-b tw-items-center  tw-justify-center tw-border-gray-200">
              <div className=" tw-mr-1 tw-text-sm">
                <IoSettingsOutline />
              </div>
              <div className="tw-text-xs">
                <a href="/">Setting</a>
              </div>
            </div>
            <a
              href="/"
              className="tw-flex tw-p-2 tw-border-b tw-items-center  tw-justify-center tw-border-gray-200"
            >
              <div className=" tw-mr-1 tw-text-sm">
                <FaRegUser />
              </div>
              <div className="tw-text-xs">Profile</div>
            </a>{' '}
            <div
              className="tw-flex tw-p-2 tw-border-b tw-items-center  tw-cursor-pointer tw-justify-center tw-text-red-500 tw-border-gray-200"
            >
              <div className=" tw-mr-1 tw-text-sm">
                <IoIosLogOut />
              </div>
               <div className="tw-text-xs" onClick={() => {signOut();}}>Logout</div>
            </div>
          </div>
        </div>

      </div>
    )
}

export default UserDropDown
