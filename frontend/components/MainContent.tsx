import Image from "next/image";
import Button from "./atom/Button";

export default function MainContent() {
  return (
    <section className="flex w-full py-16 gap-20">
      <div className="bg-white w-[50%]">
        <Image
          src={"/images/yoga-image.png"}
          alt="hello"
          height={600}
          width={600}
          style={{ width: 500, height: 500 }}
          objectFit="crop"
        />
      </div>
      <div className="w-[50%]">
        <div className="text-[35px] text-[#BA936F]">
          Practice Anytime, Anywhere with our Online Classes
        </div>
        <div className="text-black text-[19px] leading-[27px] mt-[50px] font-mono">
          Yoga is a multifaceted discipline that encompasses physical, mental,
          and spiritual aspects. It is based on the concept of the
          interconnectedness of body, mind, and spirit, and aims to promote
          balance and harmony within oneself and with the world around us.
        </div>

        <div className="mt-[50px]">
          <p className="text-[17px]">
            Are you worried about whether this form will suit you?
          </p>
          <p className="text-[17px] font-semibold text-[#BA936F]">
            First lesson - free!
          </p>
          <div className="mt-[30px]">
            <Button label="Trial Lession" />
          </div>
        </div>
      </div>
    </section>
  );
}
