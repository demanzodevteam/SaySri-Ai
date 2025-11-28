import Contact from "../../components/Contact"
import ContactBanner from "../../components/ContactBanner"

export default function Productpage() {
  return (
    <main className="flex w-full flex-col items-center justify-between ">
      <Contact />
      <ContactBanner />
    </main>
  );
}
