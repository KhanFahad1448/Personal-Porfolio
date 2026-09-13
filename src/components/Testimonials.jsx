import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import testimonials from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="max-w-screen-xl mx-auto pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        What my contacts and mentors are saying?
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper !py-14"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name} className="px-4">
            <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto">
              <img
                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={t.image}
                alt={t.name}
              />
              <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p className="text-sm md:text-base mb-2">"{t.quote}"</p>
                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">{t.name}</h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">{t.role}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
