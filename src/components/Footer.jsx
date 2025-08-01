import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border mt-5 pt-4 flex flex-wrap justify-center items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Ritish Kumar Singh. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-10"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
