import React, { MutableRefObject, useEffect, useRef } from "react";
import Navigator from "../classes/Navigator";
import MouseEventHandler from "../classes/MouseEventHandler";
import axios from "axios";

const useHome = () => {
	const navigator: MutableRefObject<Navigator | null> = useRef<Navigator | null>(null);
	const emailRef = useRef(null);
	const subjectRef = useRef(null);
	const bodyRef = useRef(null);

	useEffect(instantiateNavigator, []);

	return { navigator, emailRef, subjectRef, bodyRef, sendMessage };

	function instantiateNavigator(): void {
		navigator.current = new Navigator();
		const mouse = new MouseEventHandler(navigator.current);
		console.log(navigator.current);
		return;
	}
	async function sendMessage(e) {
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
		async function send(data) {
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
};

export default useHome;
