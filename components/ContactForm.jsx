'use client';

import { useState } from "react";

const ContactForm = () => {

  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7258523a-cf76-42fc-854b-a57fe8404268");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      event.target.reset();
      setMessage("Form submitted successfully!");
    }else{
      console.log(error);
      reset();
      setMessage("Form Submission Failed!");
    }
  }

  return (
    <>
    <div className=" flex flex-col items-center justify-center">
      <h2 className="text-3xl mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-96">
        <label htmlFor="name" className="text-bold text-left">Name</label>
        <input type="text" name="name" className="w-full border rounded-md bg-transparent px-4 py-2 placeholder:text-gray-400" placeholder="Enter your full name here"/>
        <label htmlFor="name" className="text-bold text-left mt-2">Email Address</label>
        <input type="email" name="email"  className="w-full border rounded-md bg-transparent px-4 py-2 placeholder:text-gray-400" placeholder="Enter your Email here"/>
        <label htmlFor="name" className="text-bold text-left mt-2">Message</label>
        <textarea name="message"  className="w-full border rounded-md bg-transparent resize-none placeholder:text-gray-400 px-4 py-2" placeholder="Enter your messages here"></textarea>
        <button type="submit" className=" bg-[#c85103] text-white text-center rounded-md px-7 py-2 mt-5 w-52">Send</button>
        {message && <p className="mt-4 text-base bg-green-500 text-white py-4 text-center rounded-md">{message}</p>}
      </form>
      </div>
    </>
  );
}

export default ContactForm;