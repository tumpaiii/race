import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface RaceCategoriesProps {
  className?: string;
}

const markup = "<section class=\"race\" id=\"race\"><div class=\"race-track\" id=\"race-track\"><div class=\"race-stage\"><div class=\"race-bg\"><img alt=\"Competitive road cycling\" class=\"active\" data-image=\"photo_1544191696_15693072a3cb_3\"/><img alt=\"Cycling peloton\" data-image=\"photo_1517649763962_0c623066013b_4\"/><img alt=\"Endurance bicycle ride\" data-image=\"photo_1507035895480_2b3156c31fc8\"/><img alt=\"Cycling community\" data-image=\"photo_1558618666_fcd25c85cd64\"/></div><div class=\"race-copy\"><div class=\"race-num\" id=\"race-num\">01 / 04 — COMPETITIVE</div><h2 id=\"race-title\">ROAD<br/>RACE.</h2><p id=\"race-desc\">Take your place on the start line. Find your rhythm, read the road, and race for the feeling of giving it everything.</p><div class=\"race-details\"><span><b>01</b> / Pace &amp; power</span><span><b>02</b> / Race together</span></div></div><div class=\"race-tabs\"><button class=\"active\" data-i=\"0\">01 / ROAD RACE</button><button data-i=\"1\">02 / SPRINT</button><button data-i=\"2\">03 / ENDURANCE</button><button data-i=\"3\">04 / COMMUNITY</button></div><div class=\"race-hint\">SCROLL TO CHANGE CATEGORY ↓</div><div class=\"race-progress\"><span></span></div></div></div></section>";

export default function RaceCategories({ className }: RaceCategoriesProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
