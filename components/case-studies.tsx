"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const caseStudies = [
  {
    id: 1,
    title: "Social Media Marketing",
    href: "https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?t=st=1739309201~exp=1739312801~hmac=4416dfa1a758b728493211d2d4231fcc802659dfc10a4a10f6b2995d93d9f9c9&w=740",
    description: "Engaging social media campaigns that connect with your audience"
  },
  {
    id: 2,
    title: "PPC Advertising",
    href: "https://img.freepik.com/premium-vector/pay-per-click-concept-characters-large-laptop-point-inscription-ppc-girls-with_118813-22040.jpg?w=740",
    description: "Results-driven pay-per-click advertising campaigns"
  },
  {
    id: 3,
    title: "Content Marketing",
    href: "https://img.freepik.com/premium-photo/content-marketing-concept-with-person-using-laptop-computer-isolated-with-white-highlights_660230-166930.jpg?w=826",
    description: "Strategic content that drives engagement and conversions"
  },
  {
    id: 4,
    title: "Email Marketing",
    href: "https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1681.jpg?t=st=1739310748~exp=1739314348~hmac=55e8f4b916829a92d965c9871a493d6aaf96b9ac5e571573f711253b5fac4adc&w=740",
    description: "Targeted email campaigns that deliver results"
  },
  
  {
    id: 6,
    href: "https://img.freepik.com/free-photo/smiling-female-influencer-talking-about-beauty-products-while-vlogging-from-home_637285-4353.jpg?t=st=1739309924~exp=1739313524~hmac=3ebc81efde1a112db2193bd8346435a425b06e5702a35946d95809e26645b4ba&w=740",
    title: "Influencer Marketing",
  },
  {
    id: 7,
    href: "https://img.freepik.com/free-photo/businessman-his-office-shouting-by-megaphone_1368-4633.jpg?t=st=1739309945~exp=1739313545~hmac=99fbfa62435ec45d8ea5439157c731ccb994c1b26a5dcdde5f7b2bb29ac52dde&w=740",
    title: "Affiliate Marketing",
  },
  {
    id: 8,
    href: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1739310018~exp=1739313618~hmac=cd547a0fc575b6f5a7c43be739881f621c94753306708f5ee0292a9dfba0795e&w=740",
    title: "Website Development",
  },
  {
    id: 9,
    href: "https://img.freepik.com/premium-photo/ecommerce-add-cart-online-shopping-business-technology-internet-concept_628331-637.jpg?w=900",
    title: "E-commerce Solutions",
  },
  {
    id: 10,
    href: "https://img.freepik.com/premium-vector/mini-persons-emergency-donor-aid_132971-428.jpg?w=740",
    title: "Online Reputation Management",
  },
  {
    id: 11,
    href: "https://img.freepik.com/free-photo/business-people-working-laptop-meeting_53876-40326.jpg?t=st=1739310142~exp=1739313742~hmac=06ab9fbe17bc4ab42d225615d65274f5ff291e38216e386b9a81a1e17fb9df0c&w=740",
    title: "Digital Analytics",
  },
  {
    id: 12,
    href: "https://img.freepik.com/premium-vector/video-marketing-flat-illustration-social-media-campaign-ecommerce-influencer-marketing_773186-666.jpg?w=740",
    title: "Video Marketing",
  },
];

export default function CaseStudies() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section  className="py-8 md:py-12 lg:py-24 text-white ">
      <div  className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl text-black  md:text-3xl lg:text-4xl font-bold text-center sm:text-left">
            Our Case Studies
          </h2>
          {/* <Button
            variant="outline"
            className="text-black border-white shadow-lg rounded-xl hover:bg-black hover:text-white w-full sm:w-auto"
          >
            VIEW ALL CASES
          </Button> */}
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden  group  ">
                  <Image
                    src={study.href}
                    alt={study.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-black rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2  text-black rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
