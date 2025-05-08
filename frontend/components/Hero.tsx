// interface NavbarProps {
//   label?: string;
// }
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-full py-16">
      <div className="w-[60%]">
        <div className="text-[50px] text-[#BA936F]">
          &quot;Uniting the Body, Mind, and Spirit Through the Practice of
          Yoga&quot;
        </div>
        <div className="text-black text-[19px] leading-[27px] mt-[50px] font-mono">
          Yoga is a multifaceted discipline that encompasses physical, mental,
          and spiritual aspects. It is based on the concept of the
          interconnectedness of body, mind, and spirit, and aims to promote
          balance and harmony within oneself and with the world around us.
        </div>

        <div className="relative mt-[50px]">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" fill="#CBAC90" fill-opacity="0.29" />
            <path
              d="M95.1401 70.3131C90.4406 80.7565 82.2653 89.2473 72.0073 94.3388C61.7493 99.4303 50.0432 100.807 38.8836 98.2356C27.7241 95.6638 17.8015 89.3021 10.8066 80.2345C3.81166 71.1669 0.177216 59.9544 0.522504 48.5075C0.867793 37.0607 5.17145 26.0876 12.7002 17.4581C20.2289 8.82861 30.5169 3.07656 41.8112 1.18204C53.1055 -0.712486 64.7073 1.36775 74.6398 7.06828C84.5722 12.7688 92.2209 21.737 96.2824 32.4446"
              stroke="#BA936F"
              stroke-opacity="0.87"
            />
          </svg>
          <p className="absolute top-[40%] left-[10%] text-[17px] font-mono">
            Read More
          </p>
        </div>
      </div>
      <div className="bg-white w-[40%]">
        <Image
          src={"/images/yoga-image.png"}
          alt="hello"
          height={600}
          width={486}
        />
      </div>
    </section>
  );
}
