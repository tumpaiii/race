import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const markup = "<main class=\"hero\" id=\"hero\"><div id=\"slides\"></div><div class=\"shade\"></div><nav class=\"nav\"><a class=\"brand\" href=\"#hero\"><span class=\"mark\"><i></i><i></i><i></i><i></i></span>VELO RUSH</a><div class=\"links\"><a class=\"current\" href=\"#hero\">HOME</a><a href=\"#about\">ABOUT</a><a href=\"#race\">THE RACE</a><a href=\"#venue\">ROUTE</a><a href=\"#registration\">REGISTER</a></div><button class=\"menu\" id=\"mobile-menu\" aria-expanded=\"false\" aria-controls=\"mobile-links\">MENU</button><div class=\"mobile-links\" id=\"mobile-links\"><a href=\"#about\">ABOUT</a><a href=\"#race\">THE RACE</a><a href=\"#venue\">ROUTE</a><a href=\"#registration\">REGISTER</a></div></nav><div class=\"meta\"><span>VR / RACE / 01</span><span>RIDE BEYOND LIMITS</span></div><h1 class=\"headline\" id=\"headline\"><span>RIDE</span><span>BEYOND</span></h1><div aria-label=\"Select cycling scene\" class=\"thumbs\" id=\"thumbs\"></div><div class=\"count\" id=\"count\">01 / 04</div></main>";

export default function HeroSection({ className }: HeroSectionProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
