import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default ({ onSignIn }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { onSignIn });
  }, []);

  return <div ref={ref} />;
};
