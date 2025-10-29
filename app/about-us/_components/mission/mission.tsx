import Image from "next/image";

export default async function Mission() {
  return (
    <section className="about-mission">
      <h2>Our Mission And Our Vision</h2>
      <figure className="about-mission-left">
        <Image
          src={"/mission-figure.jpg"}
          alt="Our Mission"
          height={512}
          width={470}
        />
        <figcaption>Our Commitment to Excellence</figcaption>
      </figure>
      <div className="about-mission-right">
        <div className="about-mission-card mission">
          <div className="mission-card-icon">
            <Image
              src={"/icons/mission.svg"}
              alt="Mission Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Our Mission</h3>
          <p>To simplify finance and tax compliance for UAE businesses.</p>
        </div>
        <div className="about-mission-card vision">
          <div className="mission-card-icon">
            <Image
              src={"/icons/vision.svg"}
              alt="Vision Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted financial and tax advisory partner in the
            region.
          </p>
        </div>
      </div>
    </section>
  );
}
