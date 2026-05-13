import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.utils.toArray<HTMLElement>('.section-fade').forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Stagger animations for cards
      gsap.utils.toArray<HTMLElement>('.card-stagger').forEach((container) => {
        const cards = container.querySelectorAll('.card-item');
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Scale animations for hero elements
      gsap.fromTo('.hero-scale',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.hero-scale',
            start: 'top 90%',
          }
        }
      );

      // Text reveal animations
      gsap.utils.toArray<HTMLElement>('.text-reveal').forEach((text) => {
        gsap.fromTo(text,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Glow effect animations
      gsap.utils.toArray<HTMLElement>('.glow-pulse').forEach((element) => {
        gsap.to(element, {
          boxShadow: '0 0 50px rgba(0, 212, 255, 0.5)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};
