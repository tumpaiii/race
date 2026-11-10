import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface DayInMotionProps {
  className?: string;
}

const markup = "<section class=\"day-motion\" id=\"event-flow\">\n<div class=\"motion-track\" id=\"motion-track\">\n<div class=\"motion-stage\">\n<div class=\"motion-backdrop\">\n<img alt=\"Cycling community gathering at an event\" class=\"active\" data-image=\"photo_1517457373958_b7b1e6d8f7fc\"/>\n<img alt=\"Speaker addressing an event audience\" data-image=\"photo_1475721027785_f74eccf877e2\"/>\n<img alt=\"Cyclists riding together\" data-image=\"photo_1517649763962_0c623066013b_15\"/>\n<img alt=\"People connecting at a community gathering\" data-image=\"photo_1528605248644_14dd04022da1\"/>\n</div>\n<div class=\"motion-overlay\"></div>\n\n<div class=\"motion-main\">\n<div class=\"motion-left\">\n<div class=\"motion-count\" id=\"motion-count\">01 <i>/ 04</i></div>\n<h2 id=\"motion-title\">ARRIVE<br/><em>TOGETHER.</em></h2>\n<p id=\"motion-desc\">Start with a warm welcome, meet the riders and get ready for a day shaped by the cycling community.</p>\n<div class=\"motion-type\" id=\"motion-type\">WELCOME / CONNECTION</div>\n</div>\n<div class=\"motion-right\">\n<div class=\"motion-vertical-label\">THE DAY IN MOTION</div>\n<div class=\"motion-steps\">\n<button class=\"motion-step active\" data-step=\"0\"><span>01</span><b>Arrive together</b><i>↗</i></button>\n<button class=\"motion-step\" data-step=\"1\"><span>02</span><b>Ideas in motion</b><i>↗</i></button>\n<button class=\"motion-step\" data-step=\"2\"><span>03</span><b>Take it to the road</b><i>↗</i></button>\n<button class=\"motion-step\" data-step=\"3\"><span>04</span><b>Stay for the stories</b><i>↗</i></button>\n</div>\n</div>\n</div>\n<div class=\"motion-bottom\"><span>VELO RUSH / EVENT EXPERIENCE</span><div class=\"motion-progress\"><i id=\"motion-progress\"></i></div><span id=\"motion-caption\">WELCOME &amp; CONNECT</span></div>\n</div>\n</div>\n</section>";

export default function DayInMotion({ className }: DayInMotionProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
