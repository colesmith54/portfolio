import ContactMethod from "./contact-method";
import Spacer from "@/components/spacer";

export function Contact() {
  return (
    <div>
      <ContactMethod name="Email" url="mailto:colesmith5400@gmail.com" />
      <Spacer size={8} />
      <ContactMethod
        name="LinkedIn"
        url="https://www.linkedin.com/in/colesmith54/"
      />
      <Spacer size={8} />
      <ContactMethod name="GitHub" url="https://github.com/colesmith54" />
    </div>
  );
}

export default Contact;
