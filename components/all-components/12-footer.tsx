import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface VeloRushFooterProps {
  className?: string;
}

const markup = "<footer class=\"footer\">\n<div class=\"logo\"><i class=\"symbol\"></i> VELO RUSH</div>\n<small>RIDE FAST. RACE TOGETHER.</small>\n<nav class=\"footer-nav\"><a href=\"#about\">ABOUT</a><a href=\"#race\">RACE CATEGORIES</a><a href=\"#event-flow\">EVENT FLOW</a><a href=\"#speakers\">GUESTS</a><a href=\"#venue\">VENUE</a><a href=\"#registration\">REGISTER</a></nav>\n<div class=\"footer-social\"><a aria-label=\"Instagram\" href=\"#\">IG</a><a aria-label=\"Facebook\" href=\"#\">FB</a><a aria-label=\"LinkedIn\" href=\"#\">IN</a></div>\n<small>© 2027 VELO RUSH. ALL RIGHTS RESERVED.</small>\n</footer>";

export default function VeloRushFooter({ className }: VeloRushFooterProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
