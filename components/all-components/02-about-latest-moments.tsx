import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface AboutLatestMomentsProps {
  className?: string;
}

const markup = "<section class=\"about wrap\" id=\"about\">\n<div class=\"intro\"><div class=\"intro-right editorial-wide\"><h2 class=\"split about-reveal\">We're VELO RUSH — a cycling race meetup bringing riders together for bold challenges, shared energy, and unforgettable moments on the road.</h2><div class=\"logo-row\"><span class=\"client\"><i></i> ROAD RIDERS</span><span class=\"client\">◈ PELOTON CLUB</span><span class=\"client\">◧ RACE COMMUNITY</span><span class=\"client\">◎ CYCLING CULTURE</span><span class=\"client\">✳ VELO NETWORK</span></div></div></div>\n</section><section class=\"projects wrap\"><div class=\"projects-head reveal\"><h2>Latest moments</h2></div>\n<div class=\"project-grid\">\n<article><div class=\"project\"><img alt=\"Road cyclists riding together in a group\" data-image=\"photo_1517649763962_0c623066013b\"/><div class=\"brand-overlay\">VELO RUSH</div></div><div class=\"project-caption\"><span>01 / The peloton</span><span>Community ride</span></div></article>\n<article><div class=\"project\"><img alt=\"Cyclist riding on a road during a race\" data-image=\"photo_1544191696_15693072a3cb\"/><div class=\"brand-overlay\">VELO RUSH</div></div><div class=\"project-caption\"><span>02 / The pursuit</span><span>Race day</span></div></article>\n</div>\n</section>";

export default function AboutLatestMoments({ className }: AboutLatestMomentsProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
