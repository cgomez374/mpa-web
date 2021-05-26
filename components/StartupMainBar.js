import React from "react";
import Head from 'next/head';
import StartupLeftBar from "../components/StartupLeftBar";
import StartupRightBar from "../components/StartupRightBar";

const StartupMainBar = ({ data }) => {
    return (

        <div className="container">
            <Head>
                {process.env.NODE_ENV !== 'production' && (
                    <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                )}
            </Head>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 leftbar">
                    <StartupLeftBar data={data} />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 rightbar">
                    <StartupRightBar data={data} />
                </div>
            </div>
        </div>
    );
};
export default StartupMainBar;

