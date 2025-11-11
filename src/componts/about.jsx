  import { useEffect, useRef } from 'react';


  export default function About() {
    const paraRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observerInstance.unobserve(entry.target); // Stop observing once animated
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% visible
      );
      if (paraRef.current) observer.observe(paraRef.current);

      return () => {
        if (paraRef.current) observer.unobserve(paraRef.current);
      };
    }, []);

    return (
      <section id="about" className="aboutsection ">
        <h1 className="abouthead">About Me</h1>
        <h2 className="aboutsub">Building Meaningful Digital Experiences</h2>
        <p className="aboutpara" ref={paraRef}>
          I’m a passionate <span className="text-yellow-400 font-semibold">Full-Stack Developer</span>
          with a strong foundation in both development and quality assurance. I love crafting
          clean, scalable web applications that don’t just work — they work flawlessly.
          My expertise spans modern technologies like{" "}
          <span className="text-yellow-400">React, Node.js, Tailwind CSS, and Supabase</span>,
          backed by a QA mindset that ensures every feature is tested,
          reliable, and production-ready.
          <br /><br />
          I enjoy bridging the gap between development and testing — ensuring smooth user experiences,
          efficient workflows, and high-quality code. I’m constantly exploring new tools and best practices
          to elevate both performance and design.
        </p>
      </section>
    );
  }
