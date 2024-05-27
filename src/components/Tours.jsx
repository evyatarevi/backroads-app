import Title from "./Title";
import Tour from "./Tour";

import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title startTitle="featured" endTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
