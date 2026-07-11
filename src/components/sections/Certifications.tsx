import { certifications } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import CertCard from '@/components/ui/CertCard';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          refTag="06 / Certifications"
          title="Verified credentials"
          description="Formal recognition alongside the hands-on work — mostly focused on security fundamentals and data."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
