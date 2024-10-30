import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { getStroke } from "perfect-freehand";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const SignaturePad = forwardRef(
  ({ className, strokeWidth = 3, onChange, ...props }, ref) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [strokes, setStrokes] = useState([]);
    const [currentStroke, setCurrentStroke] = useState([]);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const clear = () => {
      setStrokes([]);
      setCurrentStroke([]);
    };

    useImperativeHandle(ref, () => ({
      clear,
      getSignature: () => canvasRef.current?.toDataURL() || "",
      isEmpty: () => strokes.length === 0 && currentStroke.length === 0,
    }));

    useEffect(() => {
      const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container) return;

        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        redrawCanvas();
      };

      resizeCanvas();

      window.addEventListener("resize", resizeCanvas);

      return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    const redrawCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const drawStroke = (stroke) => {
        const perfectStroke = getStroke(stroke, {
          size: strokeWidth,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        });

        ctx.beginPath();
        ctx.fillStyle = "hsl(var(--card-foreground))";

        for (const [x, y] of perfectStroke) {
          ctx.lineTo(x, y);
        }

        ctx.fill();
      };

      strokes.forEach(drawStroke);

      if (currentStroke.length > 0) {
        drawStroke(currentStroke);
      }

      if (onChange) {
        onChange(canvas.toDataURL());
      }
    };

    useEffect(redrawCanvas, [strokes, currentStroke, strokeWidth, onChange]);

    const handlePointerDown = (event) => {
      setIsDrawing(true);

      const { offsetX, offsetY } = event.nativeEvent;

      setCurrentStroke([[offsetX, offsetY, event.pressure]]);
    };

    const handlePointerMove = (event) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = event.nativeEvent;

      setCurrentStroke((prev) => [...prev, [offsetX, offsetY, event.pressure]]);
    };

    const handlePointerUp = () => {
      setIsDrawing(false);

      if (currentStroke.length > 0) {
        setStrokes((prev) => [...prev, currentStroke]);
        setCurrentStroke([]);
      }
    };

    return (
      <div className="flex flex-col items-center">
        <div
          ref={containerRef}
          className={cn("relative h-64 w-full", className)}
          {...props}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="absolute left-0 top-0 size-full touch-none border border-input bg-card text-card-foreground"
          />
        </div>

        <Button
          size="sm"
          onClick={clear}
          disabled={strokes.length === 0 && currentStroke.length === 0}
          className="mt-4 select-none rounded-full px-32"
        >
          Clear
        </Button>
      </div>
    );
  }
);

SignaturePad.displayName = "SignaturePad";

export default SignaturePad;
