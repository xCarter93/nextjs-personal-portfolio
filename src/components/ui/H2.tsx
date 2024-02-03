import { cn } from "@/lib/utils";

const H2 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      className={cn("text-2xl font-semibold tracking-tight", props.className)}
    />
  );
};
export default H2;
