import { NextPage } from "next";
import React from "react";
// import useTest from "./useTest";

const Test: NextPage = () => {
    // const {testFunction} = useTest()
	return (
        <div className="index">
            <div className="inner-box">
                <h2 className="header" onClick={testFunction}>
                    this is a test of my portfolio
                </h2>
            </div>
        </div>
    );
};

export default Test;
