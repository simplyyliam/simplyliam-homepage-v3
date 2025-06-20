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
import { Star } from "../components/ui/modals/GraphicElements";
import { IntroWrapper } from "../components/ui/modals/IntroWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [intro, setIntro] = useState(true);
  const [window, setWindow] = useState('Home')

  const messageRef = useRef<HTMLInputElement>(null);
  const sendRef = useRef<HTMLDivElement>(null);
  const Eye_L_Ref = useRef<HTMLSpanElement>(null);
  const Eye_R_Ref = useRef<HTMLSpanElement>(null);
  const Blink_L_Ref = useRef<HTMLSpanElement>(null);
  const Blink_R_Ref = useRef<HTMLSpanElement>(null);
  const heroTextRef = useRef(null)
  const SendMessageRef = useRef(null)
  const navRef = useRef(null)
  const aboutWindowRef = useRef(null)
  const projectWindowRef = useRef(null)
  const contactWindowRef = useRef(null)


  gsap.registerPlugin(ScrollTrigger);

  //Intro Animation
  useEffect(() => {
    const tl = gsap.timeline()

    if (Eye_L_Ref && Eye_R_Ref) {

      tl.call(() => setIntro(true))

      // Blink 1
      tl.to([Eye_L_Ref.current, Eye_R_Ref.current], { height: 0, duration: 0.08, ease: "linear" })
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 0.7, scale: 1.3, duration: 0.08, ease: "linear" }, "<")
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 1, scale: 2.5, duration: 0.12, ease: "expo.out" })
      tl.to([Eye_L_Ref.current, Eye_R_Ref.current], { height: 66, duration: 0.11, ease: "linear" }) 
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 0, scale: 0, duration: 0.09, ease: "linear" }, "<")

      // short pause
      tl.to({}, { duration: 0.25 }) 

      // Blink 2
      tl.to([Eye_L_Ref.current, Eye_R_Ref.current], { height: 0, duration: 0.07, ease: "linear" })
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 1, scale: 1.2, duration: 0.07, ease: "linear" }, "<")
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 0, scale: 2.2, duration: 0.11, ease: "expo.out" })
      tl.to([Eye_L_Ref.current, Eye_R_Ref.current], { height: 66, duration: 0.10, ease: "linear" })
      tl.to([Blink_L_Ref.current, Blink_R_Ref.current], { opacity: 0, scale: 0, duration: 0.08, ease: "linear" }, "<")

      // Final close and Pause
      tl.to({}, { duration: 0.35 })
      tl.to([Eye_L_Ref.current, Eye_R_Ref.current], { height: 0, opacity: 0, duration: 0.18, ease: "expo.in" })

      tl.call(() => setIntro(false))
      tl.call(() => setShowHome(true))

      return () => {
        tl.kill()
      }
      
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline()

    if (showHome) {
      tl.to(heroTextRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "expo.out" })
      tl.to(navRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "expo.out" }, "-=0.3")
      tl.to(SendMessageRef.current, { scale: 1, opacity: 1, bottom: 20, duration: 0.5, ease: "expo.out" }, "-=0.3")
      return () => {
        tl.kill()
      }
    }
    
  }, [showHome])

  useEffect(() => {
    if (!showHome) return;

  const handleInput = () => {
    const input = messageRef.current?.value;
    setIsTyping(!!input);

    if (messageRef.current) {
      messageRef.current.style.textAlign = input ? "left" : "center";
    }
  };

  const inputElem = messageRef.current;
  if (inputElem) {
    inputElem.addEventListener("input", handleInput);
  }

      if (sendRef.current) {
        gsap.to(sendRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "expo.out",
        });
      }

  return () => {
    if (inputElem) {
      inputElem.removeEventListener("input", handleInput);
    }
  };
}, [showHome, isTyping]);


  //Displays the current window. Home would be the default state of window.
  const handleCurrentWindow = (currentWindow: string) => {
    setWindow(currentWindow)
  }

  useEffect(() => {
    if(!window)return

    const  tl = gsap.timeline()
    if (aboutWindowRef.current || projectWindowRef.current || contactWindowRef.current ) {
      tl.from([aboutWindowRef.current, projectWindowRef.current, contactWindowRef.current], {width: 10, height: 10, top: 120, borderRadius: "100%", duration: 0.25, ease: "linear"})
    }
  }, [window])

  return (
    <>
      {intro && (
        <IntroWrapper>
          <div className="flex items-center justify-center w-[30%] h-[50%] border  border-[#6B6B6B] rounded-xl ">
            {/* Blinking Eyes */}
            <div className="flex items-center justify-between w-[25em] h-[16em] p-18 relative">
              <span
                ref={Eye_L_Ref}
                className="w-[84px] h-[66px] bg-stone-900 rounded-2xl"
              ></span>
              <span
                ref={Eye_R_Ref}
                className="w-[84px] h-[66px]  bg-stone-900 rounded-2xl"
              ></span>
              <div className="flex items-center justify-between w-[25em] px-10 absolute bottom-18 left-0">
                <span ref={Blink_L_Ref}>
                  <Star />
                </span>
                <span ref={Blink_R_Ref}>
                  <Star />
                </span>
              </div>
            </div>
            <ElementFrame />
          </div>
        </IntroWrapper>
      )}
      {showHome && (
        <HomeWrapper>
          <div className="flex items-center justify-center w-screen h-screen">
            <NavModel ref={navRef} className="opacity-0 scale-x-0">
              <Avatar>
                <button
                  onClick={() => handleCurrentWindow("Home")}
                  className="relative w-[44px] h-[44px] flex items-centere justify-center"
                >
                  <img src="/sprite.png" alt="A simplyliam sprite" />
                </button>
              </Avatar>
              <NavShell>
                <CustomButton onClick={() => handleCurrentWindow("Projects")}>
                  Projects
                </CustomButton>
                <CustomButton onClick={() => handleCurrentWindow("About")}>
                  About
                </CustomButton>
                <CustomButton onClick={() => handleCurrentWindow("Contacts")}>
                  Contact
                </CustomButton>
              </NavShell>
            </NavModel>
            <div
              ref={heroTextRef}
              className="flex flex-col text-center items-centere justify-center p-4 gap-4 text-black opacity-0 scale-0"
            >
              <h1 className="text-9xl font-medium">Hey, I'm Liam</h1>
              <p className="text-3xl italic font-extralight opacity-50">
                Welcome to My World
              </p>
            </div>
            <Message ref={SendMessageRef} className="opacity-0 scale-0">
              <CustomInput ref={messageRef} />
              {isTyping && (
                <div ref={sendRef} className="opacity-0 scale-0">
                  <button className="w-14 h-9 bg-[#0d0d0d30] rounded-[10px] cursor-pointer"></button>
                </div>
              )}
            </Message>
          </div>
          {window === "About" && (
            <div className="flex items-center justify-center w-screen h-screen absolute">
              <div ref={aboutWindowRef} className="flex items-center justify-center w-[97%] h-[97%] rounded-xl bg-stone-600 absolute">
                Hello About
              </div>
            </div>
          )}
          {window === "Projects" && (
            <div className="flex items-center justify-center w-screen h-screen absolute">
              <div ref={aboutWindowRef} className="flex items-center justify-center w-[97%] h-[97%] rounded-xl bg-stone-600 absolute">
                Hello Projects
              </div>
            </div>
          )}
          {window === "Contacts" && (
            <div className="flex items-center justify-center w-screen h-screen absolute">
              <div ref={aboutWindowRef} className="flex items-center justify-center w-[97%] h-[97%] rounded-xl bg-stone-600 absolute">
                Hello Contacts
              </div>
            </div>
          )}
        </HomeWrapper>
      )}
    </>
  );
}

export default Home;
