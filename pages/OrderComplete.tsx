import { Link } from "react-router-dom";

import { IconHomeCheck } from "@tabler/icons-react";
import { Button } from "../src/components/ui/button";

export default function OrderComplete() {
  return (
    <section className="mx-5 sm:mx-20 py-20 sm:py-15">
      <div className="flex flex-col gap-4 place-items-center">
        <IconHomeCheck className="size-20 stroke-[1.3]" />
        <p className="text-bold">Order Successfully Placed</p>
        <Button
          variant="default"
          nativeButton={false}
          render={<Link to="/" />}
          className="uppercase p-2 w-fit"
        >
          Back to Home
        </Button>
      </div>
    </section>
  );
}
