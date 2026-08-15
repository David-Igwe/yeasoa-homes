import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Progress } from "./ui/progress";
import { cn } from "../lib/utils"

const orderSteps = [
  "Select Apartments",
  "Summary and Price",
  "Contact Detail",
  "Complete",
];

export default function OrderProgress() {
  const location = useLocation();

  const currentStepIndex = useMemo(() => {
    switch (location.pathname) {
      case "/order/create/summary":
        return 1;
      case "/order/create/checkout":
        return 2;
      case "/order/create/success":
        return 3;
      default:
        return 0;
    }
  }, [location.pathname]);

  const progressValue = (currentStepIndex / (orderSteps.length - 1)) * 100;

  return (
    <section className="hidden px-20 py-8 sm:block">
      <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center justify-between">
            {orderSteps.map((step, index) => {
              const isComplete = index < currentStepIndex;
              const isActive = index === currentStepIndex;

              return (
                <div key={step} className="text-xs font-medium">
                  <p
                    className={cn("transition-colors duration-300", isComplete || isActive ? "text-foreground" : "text-muted-foreground" )}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative px-4">
            <Progress
              value={progressValue}
              className="relative h-1"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
              {orderSteps.map((step, index) => {
                const isComplete = index < currentStepIndex;
                const isActive = index === currentStepIndex;

                return (
                  <div
                    key={`${step}-marker`}
                    className={cn("flex size-4 items-center justify-center rounded-full border-2 transition-all duration-300", isComplete || isActive ? "border-primary bg-primary" : "border-ring bg-background")}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {(isComplete || isActive) && (
                      <span className="size-1.5 rounded-full bg-background" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
}
