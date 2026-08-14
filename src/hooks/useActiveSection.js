import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "skills", "experience", "education", "projects", "publication", "contact"];

const useActiveSection = (ids = SECTION_IDS) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length || typeof IntersectionObserver === "undefined") return undefined;

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleRatios.delete(entry.target.id);
          }
        });

        if (visibleRatios.size > 0) {
          const [topId] = [...visibleRatios.entries()].sort((a, b) => b[1] - a[1])[0];
          setActiveId(topId);
        }
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useActiveSection;
