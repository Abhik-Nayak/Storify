"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return null; // Return null to prevent flashing of this page
};

export default Homepage;
