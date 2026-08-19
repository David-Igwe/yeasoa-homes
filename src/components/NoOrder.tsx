import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IconHomeQuestion } from '@tabler/icons-react';

export default function NoOrder() {
  return (
    <section className="mx-5 sm:mx-20 py-20 sm:py-15">
      <div className="flex flex-col gap-4 place-items-center">
        <IconHomeQuestion className="size-20 stroke-[1.3]" />
        <p className="text-bold">No Order Placed</p>
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
