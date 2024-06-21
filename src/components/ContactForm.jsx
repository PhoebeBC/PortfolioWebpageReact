import Section from "./Section";
import {stars} from "../assets";
import Button from "./Button";
import { useFormData } from 'herotofu-react';
import MessageStatus from "./MassageStatus";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
    const { formState, getFormSubmitHandler } = useFormData("https://public.herotofu.com/v1/ae52d680-2f23-11ef-a512-2d50852e3019");
    const sent = true;
    
  return (
    <Section id="contactform" className="xl:pt-20">
      <div className="container relative lg:px-20">
      <div className="hidden relative justify-center md:flex">
          <div className="absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/3 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
      <h2 className="h2 mb-4 md:mb-8">
                Send me a Message: 
                </h2> 
      <form onSubmit={getFormSubmitHandler()}>
        {/* <ContactBox className="pt-0 mb-3" type="text" placeholder="Your name" /> */}
        <div className="flex-wrap lg:flex" >
            <div className="pt-0 lg:pr-1 mb-3 basis-1/3">
            <input
                type="text"
                placeholder="Your name"
                name="name"
                className="focus:outline-none ring-color-7/80 focus:ring relative min-w-full p-3 bg-n-7 z-2 border border-n-5 rounded-[1rem] body-2 text-n-2 font-medium placeholder-n-1/50"
                required
            />
            </div>
            <div className="pt-0 lg:px-1 mb-3 basis-1/3">
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="focus:outline-none ring-color-7/80 focus:ring relative min-w-full p-3 bg-n-7 z-2 border border-n-5 rounded-[1rem] body-2 text-n-2 font-medium placeholder-n-1/50"
                required
            />
            </div>
            <div className="pt-0 lg:pl-1 mb-3 basis-1/3">
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="focus:outline-none ring-color-7/80 focus:ring relative min-w-full p-3 bg-n-7 z-2 border border-n-5 rounded-[1rem] body-2 text-n-2 font-medium placeholder-n-1/50"
            />
            </div>
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none ring-color-7/80 focus:ring relative min-w-full p-3 bg-n-7 z-2 border border-n-5 rounded-[1rem] body-2 text-n-2 font-medium placeholder-n-1/50"
            required
          />
        </div>

        <div className="flex-wrap sm:flex justify-between" >
            <div className="pt-0 mb-3">
            <Button className="font-code"
                // className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                type="submit"
            >
                <p className="body-2 normal-case">Send Message</p>
            </Button>
            {/* {formState.status} */}
            </div>
            <div className="pt-0 mb-3">
            {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}
            {formState.status==="success" ? <MessageStatus sent/> : <MessageStatus/>}
            {/* {formState.status==="success" ? clearFormData() : } */}
            </div>
        </div>
      </form>
      </div>
    </Section>
  )
}

export default ContactForm
