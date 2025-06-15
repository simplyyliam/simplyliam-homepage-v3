import { useEffect, useRef, useState } from "react";
import { HomeWrapper } from "../components/ui/modals/HomeWrapper";
import { Message } from "../components/ui/modals/MessageMe";
import { CustomInput } from "../components/ui/modals/Input";
import gsap from "gsap";
import { Avatar } from "../components/ui/modals/AvatarButton";
import { CustomButton } from "../components/ui/modals/CustomButton";
import { NavModel } from "../components/ui/modals/nav";
import { NavShell } from "../components/ui/modals/NavShell";
import ElementFrame from "../components/ui/frame";

function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [intro, Intro] = useState(true);
  const messageRef = useRef<HTMLInputElement>(null);
  const sendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleInput = () => {
      const input = messageRef.current?.value;
      setIsTyping(!!input);
    };

    const inputElem = messageRef.current;
    if (inputElem) {
      inputElem.addEventListener("input", handleInput);
      inputElem.style.textAlign = isTyping ? "left" : "center";
    }

    return () => {
      if (inputElem) {
        inputElem.removeEventListener("input", handleInput);
      }
    };
  }, [isTyping]);

  useEffect(() => {
    if (isTyping && sendRef.current) {
      gsap.to(sendRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "expo.out",
      });
    }
  }, [isTyping]);

  //To animate everything in order, add a useEffect with cronological layer animations. This only happens when the intro state becomes false.

  return (
    <HomeWrapper>
      {intro && (
        <div className="flex items-center justify-center w-[97%] h-[97%] border border-[#6B6B6B]  rounded-xl">
          {/* Blinking Eyes */}
          <div className="flex items-center justify-between w-[25em] h-[16em] p-18">
            <div className="w-21 h-16.5 bg-stone-900 rounded-2xl"></div>
            <div className="w-21 h-16.5 bg-stone-900 rounded-2xl"></div>
          </div>
          <ElementFrame />
        </div>
      )}
      {showHome && (
        <>
          <NavModel>
            <Avatar>
              <div className="relative w-[44px] h-[44px] flex items-centere justify-center">
                <img src="/sprite.png" alt="A simplyliam sprite" />
              </div>
            </Avatar>
            <NavShell>
              <CustomButton>Projects</CustomButton>
              <CustomButton>About</CustomButton>
              <CustomButton>Contact</CustomButton>
            </NavShell>
          </NavModel>
          <div className="flex flex-col text-center items-centere justify-center p-4 gap-4 text-black">
            <h1 className="text-9xl font-medium">Hey, I'm Liam</h1>
            <p className="text-3xl italic font-extralight opacity-50">
              Welcome to My World
            </p>
          </div>

          <Message>
            <CustomInput ref={messageRef} />
            {isTyping && (
              <div ref={sendRef} className="opacity-0 scale-0">
                <button className="w-14 h-9 bg-[#0d0d0d30] rounded-[10px] cursor-pointer"></button>
              </div>
            )}
          </Message>
        </>
      )}
    </HomeWrapper>
  );
}

export default Home;
