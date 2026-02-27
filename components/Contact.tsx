//   // app/contact/page.tsx
// import { type FC } from 'react';
// import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

// const ContactPage: FC = () => {
//   return (
//     <div id="contact" className="relative isolate bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 min-h-screen overflow-hidden">
//       {/* Background subtle noise / pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
//         {/* Header – more confident & concise */}
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
//             Let’s Talk
//           </h1>
//           <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Have a question, idea, or just want to say hi? We’re here and usually reply within one business day.
//           </p>
//         </div>

//         {/* Contact touchpoints – cards in grid */}
//         <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
//             <div className="absolute -top-5 left-8">
//               <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
//                 <Mail className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <div className="mt-10 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
//               <a
//                 href="mailto:info@signlinks.com.pk"
//                 className="mt-3 inline-block text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
//               >
//                 info@signlinks.com.pk
//               </a>
//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Best for detailed questions or attachments</p>
//             </div>
//           </div>

//           <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
//             <div className="absolute -top-5 left-8">
//               <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
//                 <Phone className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <div className="mt-10 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h3>
//               <p className="mt-3 text-lg font-medium text-gray-900 dark:text-white">+923008233422</p>
//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 Mon–Sat 9:00 AM – 10:00 PM PKT
//               </p>
//             </div>
//           </div>

//           <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 sm:col-span-2 lg:col-span-1">
//             <div className="absolute -top-5 left-8">
//               <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
//                 <MapPin className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <div className="mt-10 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Visit Us</h3>
//               <p className="mt-3 text-gray-600 dark:text-gray-300">
//                 Plot # 91 Block C, Sector 31/D, P&T Coperative Housing Korangi Karachi<br />
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Form + Map Section */}
//         <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* Form – floating labels, better focus */}
//           <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200/70 dark:border-gray-800/50 rounded-2xl p-8 lg:p-10 shadow-2xl shadow-gray-200/30 dark:shadow-black/20">
//             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
//               Drop us a Message
//             </h2>

//             <form className="space-y-7">
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:border-[#44ade0] focus:ring-2 focus:ring-[#44ade0] outline-none transition-all"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="name"
//                   className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#44ade0] dark:peer-focus:text-[#44ade0]"
//                 >
//                   Full Name
//                 </label>
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:border-[#44ade0] focus:ring-2 focus:ring-[#44ade0]  outline-none transition-all"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#44ade0] dark:peer-focus:text-[#44ade0]"
//                 >
//                   Email Address
//                 </label>
//               </div>

//                 {/* Subject */}

//               {/* <div className="relative">
//                 <input
//                   type="text"
//                   id="subject"
//                   className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:border-[#44ade0] focus:ring-2 focus:ring-[#44ade0]  outline-none transition-all"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="subject"
//                   className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
//                 >
//                   Subject
//                 </label>
//               </div> */}

//               <div className="relative">
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:border-[#44ade0] focus:ring-2 focus:ring-[#44ade0]  outline-none transition-all resize-none"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="message"
//                   className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#44ade0] dark:peer-focus:text-[#44ade0]"
//                 >
//                   Your Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-[#44ade0] to-[#2e2d71] hover:from-[#44ade0] hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#2e2d71] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//               >
//                 <Send className="h-5 w-5" />
//                 Send Message
//               </button>

//               <p className="text-center text-sm text-gray-500 dark:text-gray-400">
//                 We respect your privacy — your message stays between us.
//               </p>
//             </form>
//           </div>

//           {/* Map + quick note */}
//           <div className="space-y-8">
//             <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/30 dark:shadow-black/20">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.904908750337!2d67.1156023746284!3d24.832925346360184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bc36aadda6f%3A0x41069e3f0a10731e!2sSign%20Links%20Advertising%C2%AE!5e0!3m2!1sen!2s!4v1770984319015!5m2!1sen!2s"
//                 width="100%"
//                 height="480"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Our Location in Karachi"
//               />
//             </div>

//             {/* <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
//               <MessageSquare className="h-5 w-5 text-indigo-500" />
//               Prefer instant chat? We're online Mon–Fri 9–6 PKT
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;











import { type FC } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: FC = () => {
  return (
    <div id="contact" className="relative isolate bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Background subtle noise / pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Let’s Talk
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, idea, or just want to say hi? We’re here and usually reply within one business day.
          </p>
        </div>

        {/* Contact touchpoints – cards in grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute -top-5 left-8">
              <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
              <a
                href="mailto:info@signlinks.com.pk"
                className="mt-3 inline-block text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                info@signlinks.com.pk
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Best for detailed questions or attachments</p>
            </div>
          </div>

          <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute -top-5 left-8">
              <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h3>
              <p className="mt-3 text-lg font-medium text-gray-900 dark:text-white">+92-21 350062121 - 35120202</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Mon–Sat 9:00 AM – 10:00 PM PKT
              </p>
            </div> 
          </div>

          <div className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 sm:col-span-2 lg:col-span-1">
            <div className="absolute -top-5 left-8">
              <div className="rounded-full bg-gradient-to-br from-[#44ade0] to-[#2e2d71] p-4 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Visit Us</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Plot # 91 Block C, Sector 31/D, P&T Coperative Housing Korangi Karachi<br />
              </p>
            </div>
          </div>
        </div>

        {/* Map Section – now full width */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Find Us Here
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/30 dark:shadow-black/20 max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.904908750337!2d67.1156023746284!3d24.832925346360184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bc36aadda6f%3A0x41069e3f0a10731e!2sSign%20Links%20Advertising%C2%AE!5e0!3m2!1sen!2s!4v1770984319015!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location in Karachi"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>Looking forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;