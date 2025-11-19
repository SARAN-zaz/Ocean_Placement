// import images from "../../assets/Images";
import { ShoppingCart } from "lucide-react";

export default function Project_About() {
  return (
    <div className="min-h-fit bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 pt-12 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] w-[80%] mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="text-center lg:text-left">
              {/* Icon Badge */}
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                  <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4">
                    <ShoppingCart className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  E-commerce Platform
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                An E-commerce Website is an online platform that enables
                businesses to sell products or services to customers over the
                internet. It provides a virtual storefront where users can
                browse, select, and purchase items. It typically includes
                features like product listings, shopping carts, and secure
                payment processing—making it easy and efficient for businesses
                to reach a wide audience and for customers to shop comfortably
                from their homes.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://shipsy.io/wp-content/uploads/2021/06/Blog-91.jpg"
                  alt="E-commerce shopping illustration"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


















{
  /* Right Text Section */
}
{
  /* <div className=" w-full md:w-[600px] h-auto rounded-xl text-[18px] leading-relaxed  text-gray-600">
          <p>
            An E-commerce Website is an online platform that enables businesses
            to sell products or services to customers over the internet. It
            provides a virtual storefront where users can browse, select, and
            purchase items. The website typically includes features like product
            listings, shopping carts, and secure payment processing, making it a
            convenient and efficient way for businesses to reach a wide audience
            and for customers to shop from the comfort of their homes.
          </p>
        </div> */
}

{
  /* Left Image Section */
}
{
  /* <div className="w-full md:w-[500px] h-[300px] flex justify-center">
          <img
            src={images.E_COMMERCE}
            alt="E-commerce Project"
            className=" object-cover w-full h-full shadow-md"
          />
        </div> */
}
{
  /* </div>
      </div>
     </section>
  */
}
