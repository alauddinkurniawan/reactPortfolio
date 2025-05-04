import { useEffect, useRef } from "react";

function About() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scrollers = scrollerRef.current?.querySelectorAll(
      ".scroller"
    ) as NodeListOf<HTMLDivElement>;

    scrollers?.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLDivElement | null;
      if (!scrollerInner) return;

      const scrollerContent = Array.from(
        scrollerInner.children
      ) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section id="about">
      <div className="about-container">
        <img src="/foto.jpeg" alt="My Photo" className="about-photo" />
        <div className="about-text">
          <h2>Hi, meet Alki!</h2>
          <p>
          A tech enthusiast, storyteller, and lifelong volunteer with a solid mix of academic and hands-on experience in game development, leadership, UX research, and creative problem-solving.
          Always excited to learn, build, and collaborate—feel free to reach out and say hello!
          </p>
        </div>
      </div>
      <div className="container" ref={scrollerRef}>
        <div className="scroller" data-direction="right" data-speed="fast">
          <div className="scroller__inner">
            <img
              height="100px"
              src="/Aiesec_Bandung.png"
              alt="AIESEC In Bandung"
            />
            <img height="100px" src="/Ses.png" alt="Student English Society" />
            <img height="100px" src="/Kontent_Logo.png" alt="Kontent HIMA IF" />
            <img height="100px" src="/Nabati_Logo.png" alt="Nabati Group" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
