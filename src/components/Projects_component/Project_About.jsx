import images from "../../assets/Images";


export default function Project_About() {
  return (
    <section className="mx-auto w-[80%] max-w-[1200px] py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Image Section */}
        <div className="w-full md:w-[500px] h-[300px] flex justify-center">
          <img
            src={images.E_COMMERCE}
            alt="E-commerce Project"
            className="rounded-xl object-cover w-full h-full shadow-md"
          />
        </div>

        {/* Right Text Section */}
        <div className="bg-[#D9F1FF] w-full md:w-[600px] h-auto rounded-xl p-8 text-[18px] leading-relaxed shadow-sm text-gray-600">
          <p>
            An E-commerce Website is an online platform that enables businesses
            to sell products or services to customers over the internet. It
            provides a virtual storefront where users can browse, select, and
            purchase items. The website typically includes features like product
            listings, shopping carts, and secure payment processing, making it a
            convenient and efficient way for businesses to reach a wide audience
            and for customers to shop from the comfort of their homes.
          </p>
        </div>
      </div>
    </section>
  );
}
