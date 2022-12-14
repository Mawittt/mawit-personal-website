import React, { ElementType, FormEvent, MutableRefObject, useEffect, useRef } from "react";
import Navigator from "../../classes/Navigator";
import MouseEventHandler from "../../classes/MouseEventHandler";
import axios from "axios";
import useStore from "../../facade/store";


// *interfaces

interface MessageData{
    email? : string,
    subject? : string,
    body? : string
}

const useHome = () => {
    const {overlay,setMenu,setOverlay} = useStore()
	const myNavigator: MutableRefObject<Navigator | null> = useRef<Navigator | null>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const subjectRef = useRef<HTMLInputElement>(null);
	const bodyRef = useRef<HTMLTextAreaElement>(null);

	useEffect(instantiateNavigator, []);
    useEffect(trackScreenSize,[])

	return { navigator: myNavigator, emailRef, subjectRef, bodyRef, sendMessage, overlay , closeMenu};

	function instantiateNavigator(): void {
		myNavigator.current = new Navigator();
		const mouse = new MouseEventHandler(myNavigator.current);
		return;
	}
	async function sendMessage(e : MouseEvent | FormEvent)  {
		try {
			e.preventDefault();
			const data = constructData();
			await send(data);
            clearForm()
		} catch (err) {
			console.log(err);
		}
		function constructData() {
            
  			return {
                email: emailRef?.current?.value,
				subject: subjectRef?.current?.value,
				body: bodyRef?.current?.value,
			};
		}
		async function send(data : MessageData) {
			if (!data.body) return alert("please fill at least some 'body' text");
			const res = await axios.post("/api/sendMessage", data);
			alert("thanks very much for reaching out");
		}
        function clearForm(){
            if(!emailRef.current || !subjectRef.current || !bodyRef.current) return
            emailRef.current .value = ""
            subjectRef.current.value = ""
            bodyRef.current.value = ""
        }
	}
    function trackScreenSize(){
        document.addEventListener("resize",func)
        function func(){
            const screenHeight = document.documentElement.clientHeight
            document.documentElement.style.setProperty('--vh' , screenHeight + "px")
        }
        func()

        return ()=>{
            document.removeEventListener("resize",func)
        }
    }
    function closeMenu(){
        setMenu?.(null)
        setOverlay?.(null)

    }
    
};

export default useHome;
