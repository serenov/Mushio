import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  const canvasRef = useRef(null);

  const loading = useSelector((store) => store.loading);
  // console.log(loading, "this is ");

  useEffect(() => {
    if (loading) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      var currAngle = 0;
      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 20;
        const startAngle = 0;
        const endAngle = Math.PI * 2;

        context.strokeStyle = "hsl(195, 100%, 78%)"; // Set the fill color to blue
        context.lineWidth = 4;
        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        context.stroke();

        context.strokeStyle = `hsla(210, 100%, 45%)`;
        context.lineWidth = 4;
        context.beginPath();
        context.arc(centerX, centerY, radius, currAngle, currAngle + 0.5);
        context.stroke();
        currAngle += 0.2;

        window.requestAnimationFrame(draw);
      }
      draw();
    }
  });

  return (
    loading && (
      <div className="absolute backdrop-blur-[20px] z-10 grid place-content-center w-full h-full">
        <canvas ref={canvasRef} />
      </div>
    )
  );
}
