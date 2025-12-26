// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     date: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.phone) {
//       setStatus("Please fill in all required fields.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setStatus("Please enter a valid email address.");
//       return;
//     }

//     setStatus("Thank you! Your request has been sent. We'll contact you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       date: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="bg-[#DAEBCB] text-[#064e3b] font-sans min-h-screen">
//       {/* HERO SECTION */}
//       <section
//         className="relative py-32 text-center bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=90')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 max-w-5xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
//           >
//             Contact & Booking
//           </motion.h1>
//           <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
//             Book your order, takeaway, or visit us for a cozy café experience.
//             We're here to help!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//             <a
//               href="https://wa.me/447879005211"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#DAEBCB] text-[#064e3b] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#047857] hover:text-white transition text-center shadow-lg"
//             >
//               Contact on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* GET IN TOUCH - 2 COLUMN GRID */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
//             {/* LEFT: BOOKING FORM */}
//             <motion.div
//               id="booking-form"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#047857]"
//             >
//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-[#064e3b]"
//               >
//                 Get In Touch
//               </motion.h2>

//               {status && (
//                 <div
//                   className={`mb-8 text-center py-4 px-6 rounded-xl text-lg font-semibold ${
//                     status.includes("Thank you")
//                       ? "bg-[#d1fae5] text-[#065f46]"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {status}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Name"
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="Email"
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 <div className="flex gap-4">
//                   <select className="px-4 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg">
//                     <option>GB +44</option>
//                   </select>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="Phone Number"
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     placeholder="Service (Takeaway, Dine-in, etc.)"
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg"
//                   />
//                 </div>

//                 <div>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     maxLength={250}
//                     placeholder="Message (optional, max 250 characters)"
//                     className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg resize-none placeholder-gray-500"
//                   />
//                   <p className="text-right text-sm text-[#064e3b]/70 mt-1">
//                     {formData.message.length}/250
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-5 bg-[#DAEBCB] border-1 border-[#064e3b] text-[#064e3b] font-bold text-xl rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all shadow-xl active:scale-[0.98]"
//                 >
//                   Send Request
//                 </button>
//               </form>
//             </motion.div>

//             {/* RIGHT: MAP & INFO */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-10"
//             >
//               {/* Google Map Embed - Exact location for 2A King St, Bedworth */}
//               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#047857] h-[400px]">
//                 <iframe
//                   title="Café Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.7397751713333!2d-1.4786445233190432!3d52.47475873922656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774917a4c7b809%3A0xc0612674e791b7d5!2s2a%20King%20St%2C%20Bedworth%20CV12%208HT%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>

//               {/* Contact Info Cards */}
//               <div className="grid grid-cols-1 gap-6">
                
//                 {/* Opening Hours */}
//                 <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#047857]">
//                   <h3 className="text-2xl font-bold mb-2 text-[#064e3b]">Opening Hours</h3>
//                   <div className="h-1 w-12 bg-[#047857] mb-4"></div>
//                   <p className="text-lg leading-relaxed">
//                     Monday – Sunday<br />
//                     <span className="font-bold">7:00 AM – 11:30 PM</span>
//                   </p>
//                 </div>

//                 {/* Contact */}
//                 <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#047857]">
//                   <h3 className="text-2xl font-bold mb-2 text-[#064e3b]">Contact Details</h3>
//                   <div className="h-1 w-12 bg-[#047857] mb-4"></div>
//                   <p className="text-lg leading-relaxed">
//                     Address: <span className="font-semibold">2A King St, Bedworth CV12 8HT</span><br />
//                     Phone: <a href="tel:+447879005211" className="underline hover:text-[#047857] font-semibold">+44 7879 005211</a><br />
//                     Email: <a href="mailto:info@cafelamees.com" className="underline hover:text-[#047857] font-semibold">info@cafelamees.com</a>
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from '../api/axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("");
  //   setIsSubmitting(true);

  //   console.log("🚀 Form submission started with data:", formData);

  //   // Client-side validation
  //   if (!formData.name || !formData.email || !formData.phone) {
  //     setStatus("Please fill in all required fields.");
  //     console.warn("⚠️ Validation failed: Missing required fields");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setStatus("Please enter a valid email address.");
  //     console.warn("⚠️ Validation failed: Invalid email format");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   const payload = {
  //     name: formData.name.trim(),
  //     email: formData.email.trim(),
  //     phone: formData.phone.trim(),
  //     service: formData.service.trim() || null,
  //     date: formData.date || null,
  //     message: formData.message.trim() || null,
  //   };

  //   console.log("📤 Sending payload to /contact:", payload);

  //   try {
  //     const response = await fetch("/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         // Uncomment if using CSRF (e.g., Laravel with session auth)
  //         // "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')?.content || "",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     console.log("📡 Response status:", response.status, response.statusText);

  //     // Always try to parse JSON, even on error
  //     let data;
  //     try {
  //       data = await response.json();
  //       console.log("📥 Response data:", data);
  //     } catch (parseError) {
  //       console.error("❌ Failed to parse JSON response:", parseError);
  //       data = { message: "Invalid response from server" };
  //     }

  //     if (response.ok && data.success) {
  //       console.log("✅ Submission successful!");
  //       setStatus("Thank you! Your request has been sent. We'll contact you soon.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         service: "",
  //         date: "",
  //         message: "",
  //       });
  //     } else {
  //       const errorMsg = data.message || `Server error: ${response.status}`;
  //       console.error("❌ Submission failed:", errorMsg);
  //       setStatus(errorMsg || "Something went wrong. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("🌐 Network or fetch error:", error);
  //     if (error.name === "TypeError" && error.message.includes("fetch")) {
  //       setStatus("Unable to reach server. Check your internet connection or API URL.");
  //     } else {
  //       setStatus("Failed to send message. Please try again later.");
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //     console.log("🔚 Submission process finished.");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("");
  setIsSubmitting(true);

  console.log("🚀 Form submission started with data:", formData);

  // Client-side validation (same as before)
  if (!formData.name || !formData.email || !formData.phone) {
    setStatus("Please fill in all required fields.");
    console.warn("⚠️ Validation failed: Missing required fields");
    setIsSubmitting(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setStatus("Please enter a valid email address.");
    console.warn("⚠️ Validation failed: Invalid email format");
    setIsSubmitting(false);
    return;
  }

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    service: formData.service.trim() || null,
    date: formData.date || null,
    message: formData.message.trim() || null,
  };

  console.log("📤 Sending payload via Axios:", payload);

  try {
    const response = await axios.post('/contact', payload); // Note: no /api here because baseURL already includes it

    console.log("✅ Success response:", response.data);

    setStatus("Thank you! Your request has been sent. We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  } catch (error) {
    console.error("❌ Axios error:", error);

    if (error.response) {
      // Server responded with error status (400, 422, 500, etc.)
      console.log("Server error data:", error.response.data);
      const message = error.response.data.message || "Something went wrong. Please try again.";
      setStatus(message);
    } else if (error.request) {
      // No response received (CORS, network, wrong port)
      console.error("No response received:", error.request);
      setStatus("Unable to reach server. Is Laravel running on port 8000?");
    } else {
      setStatus("An unexpected error occurred.");
    }
  } finally {
    setIsSubmitting(false);
    console.log("🔚 Submission finished.");
  }
};

  return (
    <div className="bg-[#DAEBCB] text-[#064e3b] font-sans min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative py-32 text-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=90')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
          >
            Contact & Booking
          </motion.h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            Book your order, takeaway, or visit us for a cozy café experience.
            We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/447879005211"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DAEBCB] text-[#064e3b] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#047857] hover:text-white transition text-center shadow-lg"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH - 2 COLUMN GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: BOOKING FORM */}
            <motion.div
              id="booking-form"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#047857]"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold text-center mb-10 text-[#064e3b]"
              >
                Get In Touch
              </motion.h2>

              {status && (
                <div
                  className={`mb-8 text-center py-4 px-6 rounded-xl text-lg font-semibold ${
                    status.includes("Thank you") || status.includes("sent")
                      ? "bg-[#d1fae5] text-[#065f46]"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* All inputs remain the same */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500 disabled:opacity-70"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500 disabled:opacity-70"
                  />
                </div>

                <div className="flex gap-4">
                  <select
                    className="px-4 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg"
                    disabled={isSubmitting}
                  >
                    <option>GB +44</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500 disabled:opacity-70"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Service (Takeaway, Dine-in, etc.)"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg placeholder-gray-500 disabled:opacity-70"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={250}
                    placeholder="Message (optional, max 250 characters)"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-xl bg-[#DAEBCB]/20 border border-[#047857]/40 focus:border-[#047857] focus:outline-none text-lg resize-none placeholder-gray-500 disabled:opacity-70"
                  />
                  <p className="text-right text-sm text-[#064e3b]/70 mt-1">
                    {formData.message.length}/250
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#DAEBCB] border-1 border-[#064e3b] text-[#064e3b] font-bold text-xl rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            </motion.div>

            {/* RIGHT SIDE: MAP & INFO (unchanged) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#047857] h-[400px]">
                <iframe
                  title="Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.7397751713333!2d-1.4786445233190432!3d52.47475873922656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774917a4c7b809%3A0xc0612674e791b7d5!2s2a%20King%20St%2C%20Bedworth%20CV12%208HT%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#047857]">
                  <h3 className="text-2xl font-bold mb-2 text-[#064e3b]">Opening Hours</h3>
                  <div className="h-1 w-12 bg-[#047857] mb-4"></div>
                  <p className="text-lg leading-relaxed">
                    Monday – Sunday<br />
                    <span className="font-bold">7:00 AM – 11:30 PM</span>
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#047857]">
                  <h3 className="text-2xl font-bold mb-2 text-[#064e3b]">Contact Details</h3>
                  <div className="h-1 w-12 bg-[#047857] mb-4"></div>
                  <p className="text-lg leading-relaxed">
                    Address: <span className="font-semibold">2A King St, Bedworth CV12 8HT</span><br />
                    Phone: <a href="tel:+447879005211" className="underline hover:text-[#047857] font-semibold">+44 7879 005211</a><br />
                    Email: <a href="mailto:info@cafelamees.com" className="underline hover:text-[#047857] font-semibold">info@cafelamees.com</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}