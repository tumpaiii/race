import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface FinalCtaProps {
  className?: string;
}

const markup = "<section class=\"final-cta\" id=\"final-cta\">\n<div class=\"cta-image\"><img alt=\"Cyclists riding together on an open road\" data-image=\"photo_1517649763962_0c623066013b_4\"/></div>\n<div class=\"cta-shade\"></div>\n<div class=\"cta-content\">\n<div class=\"cta-top\"><span>( 11 ) / YOUR NEXT CHAPTER</span><span>VELO RUSH 2027 · NEW YORK</span></div>\n\n<h2>RIDE<br/><em>TOGETHER.</em></h2>\n<p>One city. One cycling community. Countless reasons to move forward. We’ll see you at the starting line.</p>\n<a class=\"cta-button\" href=\"#registration\">BE PART OF VELO RUSH <b>↗</b></a>\n<div class=\"cta-bottom\"><span>SEPTEMBER 18, 2027 · NEW YORK CITY</span><span>RIDE / CONNECT / REPEAT</span></div>\n</div>\n</section>";

export default function FinalCta({ className }: FinalCtaProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
