import React from "react";

export default function HomeTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anonymous",
      feedback:
        "Working with Gimmick Marketers was a game-changer for our brand. Their creative approach and strategic insights took our campaign to new heights. The results exceeded our expectations, and the collaboration was seamless. Looking forward to more success together!",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 2,
      name: "Atiksha Rathi, Influencer",
      feedback:
        "Gimmick Marketers stands out in the crowded influencer marketing space. Their team is not just about promotions; they understand the essence of our brand and craft campaigns that truly resonate. It’s a pleasure collaborating with such a dedicated and creative team.",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 3,
      name: "Anonymous",
      feedback:
        "We’ve partnered with several agencies, but Gimmick Marketers brought a fresh perspective to our campaigns. Their attention to detail and commitment to results set them apart. The impact on our audience was immediate, and we’ve seen sustained growth. Highly recommended!",

      image: "/assets/Influencers/I1.jpg",
    },
  ];

  return (
    <section className='py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl lg:text-6xl font-extrabold font-lato text-gray-800'>
          <span className='text-green-600'>What People Say About Us</span>
        </h2>
        <p className='mt-4 text-lg lg:text-xl text-gray-600'>
          See how Gimmick Marketers transformed brands and made an impact.
        </p>
      </div>
      <div className='space-y-16'>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex flex-col lg:justify-around ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8`}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-fit h-80 object-cover rounded-full shadow-lg'
            />
            <div className='text-center lg:text-left lg:w-1/2'>
              <p className='text-lg lg:text-xl text-gray-700 font-medium mb-4'>
                "{testimonial.feedback}"
              </p>
              <h3 className='text-lg font-bold text-gray-800'>
                – {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
