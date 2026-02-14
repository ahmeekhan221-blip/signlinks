// "use client";
// import React from "react";
// import { LinkPreview } from "@/components/ui/link-preview";

// export function Developer() {
//   return (
//     <div className="">
//       <p className="text-gray-500 text-sm md:text-sm max-w-3xl items-center justify-center">
//         Developed by {" "}
//         <LinkPreview
//           url="https://nihalkhanghauri.vercel.app"
//           className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#01ffdd] via-[#2d9c9e] to-[#02f3fc]  hover:via-[#02c8f9] hover:to-[#000000]"
//           imageSrc="/nihal.PNG"
//           isStatic
//         >
//           Nihal Khan Ghauri
//         </LinkPreview>{" "}
//       </p>

      
//     </div>
//   );
// }





"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function Developer() {
  return (
    <div className="">
      <p className="text-gray-400 text-sm md:text-sm max-w-3xl items-center justify-center">
        Developed by {" "}
        <LinkPreview
          url="https://nihalkhanghauri.vercel.app"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#035cf5] to-[#02d2f6]  transition-all duration-500 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-[#035cf5] after:to-[#02d2f6] after:scale-x-0 after:origin-center  after:transition-transform after:duration-500 hover:after:scale-x-100"
          imageSrc="/nihal.PNG"
          isStatic
        >
          Nihal Khan Ghauri
        </LinkPreview>{" "}
      </p>
    </div>
  );
}