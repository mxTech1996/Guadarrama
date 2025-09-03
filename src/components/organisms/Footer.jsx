"use client";
import { map } from "lodash";
import Link from "next/link";
import Container from "../atoms/Container";
import { contactData, footerData, phoneNumber } from "@/data";
import Image from "next/image";

const Footer = () => (
  <div className="flex flex-col">
    <div className=" bg-white text-black w-full py-14">
      <Container className="flex flex-col-reverse w-full">
        <Image
          alt="Visa mastercard"
          width={70}
          height={70}
          src={"/images/visaMaster.png"}
        />
        <div className="flex items-center gap-4 mb-6">
          {map(footerData, (item, i) => (
            <Link
              target="_blank"
              href={item.href}
              key={i}
              className="hover:underline text-sm lg:text-base"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {map(contactData, ({ text, Icon }, i) => (
          <div>
            <p style={{ marginBottom: "10px" }} key={i}>
              {text}
            </p>
          </div>
        ))}

        {/* <div className='flex items-center justify-between w-full mb-2'>
          <div className='flex gap-5 items-center'>
            <Image
              alt='Whatsapp'
              onClick={() => window.open(`https://wa.me/${phoneNumber}`)}
              width={40}
              height={40}
              className='cursor-pointer'
              src={'/images/whatsapp.png'}
            />
            <Image
              alt='Instagram'
              width={40}
              height={40}
              className='cursor-pointer'
              src={'/images/instagram.png'}
            />
          </div>
        </div> */}
      </Container>
    </div>
  </div>
);

export default Footer;
