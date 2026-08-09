import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="site-container announcement-inner">
        <span><Sparkles size={14} strokeWidth={1.7} aria-hidden="true" /> Free UK delivery over £50</span>
        <span className="announcement-secondary">Every pot printed to order in our UK studio</span>
      </div>
    </div>
  );
}
