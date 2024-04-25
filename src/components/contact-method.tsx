import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";

export function ContactMethod({ url, name }: { url: string; name: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <SocialIcon url={url} style={{ height: 36, width: 36 }} />
      <Button variant="link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </Button>
    </div>
  );
}

export default ContactMethod;
