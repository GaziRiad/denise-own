"use client";

import Image from "next/image";
import XchallengeItem from "./XchallengeItem";
import { xchanllengeFAQ } from "@/translations/nl/thirdPage";

function XchallengeSection() {
  return (
    <section className="min-h-screen items-stretch justify-center bg-[#F9DCE8] lg:flex">
      <div className="flex-1 bg-black">
        <Image
          src="/images/food.jpg"
          width={1600}
          height={1600}
          alt="Xchallenge denise anna challenge"
          className=" h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 px-5 py-20 lg:px-16">
        <p className="mb-14 font-display text-[2.5rem] lg:max-w-xl xl:text-[4rem]">
          De X dagen challange
        </p>
        <div className="lg:max-w-2xl">
          <p className="mb-4 text-md font-medium">
            Train in X dagen naar jouw schoonheids ideaal
          </p>
          <p className="mb-11 text-base font-light">
            Dolor cupidatat ea irure et labore eu ut deserunt adipisicing
            pariatur aute deserunt id consectetur.
          </p>

          <div>
            <p className="mb-5 text-base font-light">
              Dit krijg je voor je investering:
            </p>
            <div className="flex flex-col items-center justify-center gap-6 ">
              {xchanllengeFAQ.map((item, index) => (
                <XchallengeItem
                  key={index}
                  title={item.title}
                  body={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XchallengeSection;
