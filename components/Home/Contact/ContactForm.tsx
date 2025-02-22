// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
//       <h1 className="text-bg tex-2xl md:text-3xl lg:text-[2.5rem] font-bold">
//         Let's work together!
//       </h1>
//       <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//         aspernatur, voluptatem accusantium sequi ut nesciunt.
//       </p>
//       {/* Input fileds */}
//       <form className="mt-8 block w-full overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="text"
//             placeholder="First name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] 
//             border-gray-200 border-opacity-15 outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Last name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] 
//             border-gray-200 border-opacity-15 outline-none w-full"
//           />
//         </div>
//         <div className="flex mt-5  flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] 
//             border-gray-200 border-opacity-15 outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Phone number"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] 
//             border-gray-200 border-opacity-15 outline-none w-full"
//           />
//         </div>
//         <div>
//           <select
//             className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] 
//           border-gray-200 border-opacity-15 outline-none"
//           >
//             <option value="" disabled selected>
//               Select and option
//             </option>
//             <option value="frontend">Frontend Development</option>
//             <option value="backend">Backend Development</option>
//             <option value="fullstack">Fullstack Development</option>
//           </select>
//         </div>
//         <textarea
//           className="w-full mt-5 bg-black text-white
//         placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
//           rows={7}
//           placeholder="Message"
//         ></textarea>
//         <div className="mt-4">
//           <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_dx4n72i";
    const templateID = "template_bi5qngc";
    const userID = "2mEbyeOB4LDaDrd8z";

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send the message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&#39;s work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi
        doloremque error et? Alias, molestiae.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="mt-5">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <textarea
          name="message"
          rows={7}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3.5 rounded-full text-white ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#7947df] hover:bg-[#5c2fb7] transition-all duration-150"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
