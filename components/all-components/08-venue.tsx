import MotionSection from "@/components/all-components/motion-section";
import { cn } from "@/lib/utils";

interface VenueProps {
  className?: string;
}

const markup = "<section class=\"venue-section venue-rework\" id=\"venue\">\n<div class=\"venue-rework-top\"><span>( 08 ) / VENUE &amp; LOCATION</span><span>VELO RUSH / GETTING HERE</span></div>\n<div class=\"venue-editorial\">\n<div class=\"venue-photo\">\n<img alt=\"Open road winding through a green landscape\" data-image=\"photo_1500530855697_b586d89ba3ee\"/>\n<span class=\"venue-photo-caption\">THE ROAD. THE PEOPLE. THE PLACE.</span>\n</div>\n<div class=\"venue-info\">\n\n<h2>MEET US<br/><em>OUT THERE.</em></h2>\n<p>A gathering point for the cycling community. Come together, share the day and get ready to ride.</p>\n<div class=\"venue-info-rule\"></div>\n<div class=\"venue-meta\"><span>EVENT LOCATION</span><strong>To be announced</strong></div>\n<div class=\"venue-meta\"><span>DATE &amp; TIME</span><strong>Details coming soon</strong></div>\n<div class=\"venue-meta\"><span>ROUTE INFORMATION</span><strong>Released with event details</strong></div>\n<div class=\"venue-note\">We’ll share the confirmed venue, travel guidance and route details as soon as they’re announced.</div>\n</div>\n</div>\n<div class=\"venue-bottomline\"><span>FIND YOUR WAY TO VELO RUSH</span><span>LOCATION DETAILS COMING SOON ↗</span></div>\n</section>";

export default function Venue({ className }: VenueProps) {
  return <MotionSection className={cn("velo-section-shell", className)}><div dangerouslySetInnerHTML={{ __html: markup }} /></MotionSection>;
}
