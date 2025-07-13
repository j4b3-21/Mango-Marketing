import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "../components/Footer.jsx";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setStatus("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus("Failed to send message.");
                },
            );
    };

    return (
        <div className="w-full flex flex-col px-6 md:px-10 pt-10 items-center">
            {/* Header */}
            <div className="text-center max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold">We're always eager to hear from you!</h1>
                <p className="text-sm md:text-base pt-4 text-gray-600">
                    You can call us during working hours or visit our office. All mails will be responded to within 24 hours.
                </p>
                <p className="text-sm md:text-base text-gray-600">Love to hear from you!</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 py-10 md:py-20 items-start w-full justify-center">
                {/* Address */}
                <div className="flex items-start gap-4">
                    <i className="ri-map-pin-line text-4xl md:text-5xl text-blue-400"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold">Address</h1>
                        <a
                            href="https://maps.app.goo.gl/qi8UD6CpkYMR41bJ8"
                            className="text-gray-400 text-sm md:text-base"
                            target="_blank"
                        >
                            #38, Basavaraj Building, Cheemasandra<br />
                            Main Road, Virgonagar Post, Bengaluru<br />
                            - 560049.<br />
                            CLICK HERE FOR MAPS
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <i className="ri-phone-fill text-4xl md:text-5xl text-blue-400"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold">Contact</h1>
                        <p className="text-gray-400 text-sm md:text-base">
                            Mobile: +91 9035790196 <br />
                            Mail: mmpacktech.in@gmail.com
                        </p>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                    <i className="ri-time-line text-4xl md:text-5xl text-blue-400"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold">Hour of operation</h1>
                        <p className="text-gray-400 text-sm md:text-base">
                            Monday - Saturday <br />
                            09:30AM - 06:00PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="w-full max-w-md py-10">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Your Next Big Step Starts with a Message!
                </h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        required
                        placeholder="Your Name"
                        className="w-full px-5 py-2 rounded-full bg-white/10 border border-transparent focus:outline-none focus:border-black transition"
                    />
                    <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="Your Email"
                        className="w-full px-5 py-2 rounded-full bg-white/10 border border-transparent focus:outline-none focus:border-black transition"
                    />
                    <input
                        type="number"
                        name="contact_number"
                        required
                        placeholder="Your Phone Number"
                        className="w-full px-5 py-2 rounded-full bg-white/10 border border-transparent focus:outline-none focus:border-black transition"
                    />
                    <input
                        type="submit"
                        value="Send"
                        className="w-full py-2 px-6 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
                    />
                </form>

                {status && (
                    <p className="mt-4 text-center text-green-600 text-sm">{status}</p>
                )}
            </div>

            <div className="mt-4">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
