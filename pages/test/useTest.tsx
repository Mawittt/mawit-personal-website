import React from "react";
import internal from "stream";

const useTest = () => {
	
    return <>this is another page</>;

    function testFunction(){
        alert("hello runing my next test function")


        function stuff (a : number, b? : string) : string{
            if(!b) b = ""
            return a + b 
        }

        const something = stuff(2)
    }
};

export default useTest;
