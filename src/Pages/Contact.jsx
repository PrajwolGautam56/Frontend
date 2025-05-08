import { useState, useRef, useEffect } from "react";

import Nav from "../components/Nav";
import Contacts from "../components/Contacts";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const message = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");

  useEffect(()=>{
console.log(firstname.current)
console.log(lastname.current)
console.log(email.current)
console.log(message.current)

  },[])
  

  return (
    <>
    <Nav />
    <div className="pt-24">
      <Contacts />
    </div>
    </>
    
  );
}
