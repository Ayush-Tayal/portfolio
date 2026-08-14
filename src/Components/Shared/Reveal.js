import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInView from "../../hooks/useInView";

const RevealWrapper = styled.div`
  opacity: 0;
  transform: translateY(14px);
  transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);
  transition-delay: ${({ $delay }) => $delay}ms;

  &[data-revealed="true"] {
    opacity: 1;
    transform: translateY(0);
  }
`;

/**
 * mount="onView" (default) reveals once the element scrolls into the viewport.
 * mount="onMount" reveals right after first paint — for above-the-fold content
 * (a scroll trigger on the hero would otherwise never fire before scroll starts).
 */
const Reveal = ({ children, delay = 0, as, className, mount = "onView" }) => {
  const [viewRef, inView] = useInView();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mount !== "onMount") return undefined;
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, [mount]);

  const revealed = mount === "onMount" ? mounted : inView;

  return (
    <RevealWrapper
      ref={mount === "onMount" ? undefined : viewRef}
      as={as}
      className={className}
      $delay={delay}
      data-revealed={revealed}
    >
      {children}
    </RevealWrapper>
  );
};

export default Reveal;
