import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import shubahm from "../assets/shubaham.jpg";
import prince from "../assets/prince.jpg";
import aman from "../assets/aman.jpg";
import ayush from "../assets/ayush.jpg";
import harshit from "../assets/harshit.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
const Testimonial = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-8 py-10">
        <Heading highlight="Customer" content="Saying" />

        <div className="py-6 flex justify-end gap-x-2 ">
          <button className="text-2xl bg-zinc-100 w-11 h-11 rounded-lg  flex hover:bg-gradient-to-b from-lime-400 to-lime-700 hover:text-white cursor-pointer text-zinc-800 justify-center items-center custom-prev ">
            <IoIosArrowBack />
          </button>
          <button className="text-2xl bg-zinc-100 w-11 h-11 rounded-lg flex hover:bg-gradient-to-b from-lime-400 to-lime-700 hover:text-white cursor-pointer text-zinc-800 justify-center items-center custom-next ">
            <IoIosArrowForward />
          </button>
        </div>

        {/* swipper */}
        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 p-8 rounded-xl">
                <div className="flex gap-4 items-center">
                  <div className="w-15 h-15 rounded-full outline-2 outline-lime-600 outline-offset-4 overflow-hidden">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex mt-2 text-amber-600 gap-1 text-xl">{Array.from({length:item.rating},(_,index)=>(
                      <FaStar/>
                    ))}</span>
                  </div>
                </div>

                <div className="mt-9">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* */}
      </div>
    </section>
  );
};

export default Testimonial;

const review = [
  {
    id: 1,
    name: "Shubham rai",
    profession: "Student",
    rating: 4,
    para: "As a student, I find EcoCart really helpful. It’s easy to use, affordable, and always delivers fresh and organic products on time. A great choice for anyone looking for quality groceries online",
    // image: shubahm,
  },
  {
    id: 2,
    name: "Prince singh",
    profession: "Food Blogger",
    rating: 6,
    para: "As a food blogger, EcoCart has been a game-changer for me. The fresh, organic ingredients and reliable delivery make it so easy to create delicious recipes and share them with my audience.",
    image: prince,
  },
  {
    id: 3,
    name: "Aman rai",
    profession: "Chef",
    rating: 3.6,
    para: "As a chef, I value fresh and high-quality ingredients, and EcoCart never disappoints. Their organic produce and timely delivery make it easier to bring authentic flavors to every dish I create.",
    image: aman,
  },
  {
    id: 4,
    name: "Ayush rai",
    profession: "Student",
    rating: 4,
    para: "As a student, I find EcoCart really helpful. It’s easy to use, affordable, and always delivers fresh and organic products on time. A great choice for anyone looking for quality groceries online",
    image: ayush,
  },
  {
    id: 5,
    name: "Harshit rai",
    profession: "Fitness Coach",
    rating: 5,
    para: "As a fitness coach, I always recommend EcoCart to my clients. Their fresh, organic, and chemical-free products support a healthy lifestyle and make clean eating simple and convenient.",
    image: harshit,
  },
];
