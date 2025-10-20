import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Çok sağlam ScrollToTop:
 * - Browser scrollRestoration = manual
 * - Hash varsa hedef elemana, yoksa sayfa tepesine
 * - Hangi elementin scroll ettiğini otomatik bulur (window / document / iç container)
 * - İçerik mount edilsin diye küçük gecikme ile çalışır
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // Varsayılan geri yüklemeyi kapat
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => { window.history.scrollRestoration = prev; };
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    // Hangi element scroll ediyor bul
    const getScroller = () => {
      // Önce özel bir scroll container var mı bak (overflow:auto/scroll)
      const candidates = Array.from(document.querySelectorAll("*"))
        .filter((el) => {
          const cs = getComputedStyle(el);
          const oy = cs.overflowY;
          return (oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight;
        });

      // En büyük scrollHeight'e sahip olan makul aday
      if (candidates.length) {
        candidates.sort((a, b) => b.scrollHeight - a.scrollHeight);
        return candidates[0];
      }

      // Yoksa documentElement / body
      return document.scrollingElement || document.documentElement || document.body;
    };

    const scroller = getScroller();

    const scrollToTarget = () => {
      if (cancelled) return;

      // Hash varsa hedefe kay
      if (hash) {
        const id = hash.slice(1);
        const target = document.getElementById(id);
        if (target) {
          // Hedefi görünür alana al
          target.scrollIntoView({ block: "start", inline: "nearest" });
          return;
        }
      }

      // Hash yoksa tepeye
      if (scroller === document.documentElement || scroller === document.body) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } else {
        scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    // İçerik mount edilsin diye bir sonraki frame’de dene
    const t1 = setTimeout(scrollToTarget, 0);

    // Hash varsa hedef henüz DOM'a gelmemiş olabilir; kısa süre re-try et
    let tries = 0;
    if (hash) {
      const rAFloop = () => {
        if (cancelled) return;
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start", inline: "nearest" });
        } else if (tries < 12) { // ~200ms
          tries += 1;
          requestAnimationFrame(rAFloop);
        }
      };
      requestAnimationFrame(rAFloop);
    }

    return () => {
      cancelled = true;
      clearTimeout(t1);
    };
  }, [pathname, search, hash]);

  return null;
}
