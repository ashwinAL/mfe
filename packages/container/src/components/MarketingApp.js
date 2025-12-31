import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const marketingRef = useRef(null);

  useEffect(() => {
    if (marketingRef.current) {
      mount(marketingRef.current);
    }
  }, []);

  return <div ref={marketingRef}></div>;
}
