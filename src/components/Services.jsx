import Title from "./Title";
import Article from "./Article";

import { articles } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title startTitle="our" endTitle="services" />
      <div className="section-center services-center">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Services;
