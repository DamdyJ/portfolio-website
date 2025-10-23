"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// It's good practice to create a separate component for the object itself.
// This makes it easy to manage the animation logic for each individual object.
const FallingSquare = () => {
  // useRef to get a reference to the DOM element
  const squareRef = useRef<HTMLDivElement>(null);

  // useGSAP hook for safe, easy GSAP animations in React
  useGSAP(
    () => {
      if (!squareRef.current) return;

      // We use a GSAP timeline to control the animation sequence
      const tl = gsap.timeline({
        repeat: -1, // This makes the timeline loop indefinitely
      });

      // The fromTo() method is perfect for this. We define both the start and end states.
      // GSAP will re-evaluate the function-based values on each repeat,
      // giving us new random values for every loop.
      tl.fromTo(
        squareRef.current,
        {
          // Starting state (FROM)
          y: -100, // Start above the viewport
          x: () =>
            gsap.utils.random(
              window.innerWidth - window.innerWidth / 3,
              window.innerWidth - window.innerWidth * (2 / 3),
            ), // Random horizontal position
          rotation: () => gsap.utils.random(-90, 90), // Random starting rotation
        },
        {
          // Ending state (TO)
          y: window.innerHeight + 100, // End below the viewport
          rotation: () => gsap.utils.random(180, 270), // Random ending rotation

          // Animation properties
          ease: "power1.in", // This ease simulates gravity, starting slow and accelerating
          duration: () => gsap.utils.random(3, 6), // Random duration for variety
          delay: () => gsap.utils.random(0, 5), // Random delay before each one starts
        },
      );
    },
    { scope: squareRef },
  ); // Scope the hook to our ref for better performance and cleanup

  return (
    <div
      ref={squareRef}
      className="absolute left-0 top-0 h-12 w-12 rounded-lg bg-sky-400"
    />
  );
};

// This is the main component you'll import into your page.
// It sets up the scene and renders multiple falling objects.
export default function FallingAnimation() {
  // You can change this number to create more or fewer objects
  const numberOfObjects = 4;

  return (
    <div className="relative">
      {/* Render the falling objects by mapping over an array */}
      {Array.from({ length: numberOfObjects }).map((_, index) => (
        <FallingSquare key={index} />
      ))}
    </div>
  );
}
