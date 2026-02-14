// app/ceo-message/page.tsx    ← or embed this as a section in your about/team page
import { type FC } from 'react';

const CeoMessagePage: FC = () => {
  return (
    <div id='team' className="relative bg-gray-50/60 dark:bg-gray-950 min-h-screen">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid-slate-100/30 dark:bg-grid-slate-900/20 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* CEO Image - prominent, circular with subtle effects */}
          <div className="relative mb-10">
            
            {/* Optional subtle glow/hover effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight mb-3">
            Message from Our CEO
          </h1>

          <p className="text-lg font-medium text-[#44ade0] dark:text-[#2e2d71] mb-10">
            Mr. Asif Yaqoob
          </p>

          {/* Message content - warm, readable */}
          <div className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Michael LaBoeuf once said, &quot;A satisfied customer is the best business startegy of all.&quot;
            </p>

            <p>
                At Signlinks, we embrace this philosophy wholeheartedly, empowering our team to go above and beyond in delivering outstanding service and creating memorable experiences. With customers at the center of everything we do, we craft our strategies with purpose-focusing on providing branding solutions that truly make an impact.  
              
            </p>

            <p className="font-medium">
              Our unwavering commitment to customer satisfaction drives us to not just meet, but exceed expectaions, and it&apos;s this relentless pursuit of excellence that has paved the way for our continued success.  
            </p>

            <p className="italic text-gray-600 dark:text-gray-400 pt-4">
              Together, we&apos;re building a future where every customer feels valued and every connecction is meaningful.
            </p>
          </div>

          {/* Link to full team */}
          {/* <div className="mt-16">
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-br from-[#44ade0] to-[#2e2d71] hover:bg-[#2e2d71] text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              View All Team Members
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CeoMessagePage;