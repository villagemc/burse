import Footer from "@/components/Footer/Footer";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createRootRoute({ component: Root });

function Root() {
  const pageElement = useRef<null | HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const element = pageElement.current?.classList;
    const removeClass = () => element?.remove('page_animate');

    element?.add('page_animate');

    document.addEventListener('animationend', removeClass);

    return () => {
      document.removeEventListener('animationend', removeClass);
    }
  }, [pathname]);

  return (
    <div className="page" ref={pageElement}>
      <Outlet />
      <Footer />
    </div>
  )
}