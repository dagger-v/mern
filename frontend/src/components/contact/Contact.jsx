import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Verdant</p>
      </div>
      <div className={styles.main}>
        <p>
          Welcome to <span>Verdant</span>, where passion meets pixels!
        </p>
        <p>We are:</p>
        <ul>
          <li>Dagger</li>
          <li>Poison</li>
        </ul>
      </div>
      <div className={styles.content}>
        <p>
          As lifelong enthusiasts of the fantastical realms found within the
          world of pixels and ink, we founded <span>Verdant</span> as a
          celebration of the vibrant and diverse world of multimedia
          storytelling. Our shared love for immersive narratives, breathtaking
          visuals, and the boundless creativity that flows through the veins of
          video games, anime, and comics fuels our mission to create a space
          where fellow enthusiasts can revel in the magic of these
          interconnected universes.
        </p>
      </div>
      <div className={styles.content}>
        <p>
          We didn't just stumble upon this venture; our journey began as friends
          who bonded over late-night gaming sessions, animated series marathons,
          and spirited debates about the latest comic book arcs. It was in these
          moments that we realized the power of these mediums to inspire,
          entertain, and bring people together from all walks of life.
        </p>
      </div>
      <div className={styles.content}>
        <p>
          At <span>Verdant</span>, we strive to capture the essence of what
          makes video games, anime, and comics so special. Whether you're a
          seasoned gamer, an anime aficionado, or a comic book connoisseur, our
          platform is designed to be your digital sanctuary—a place where you
          can find insightful articles, reviews, and features that explore the
          intricate tapestry of these captivating worlds.
        </p>
      </div>
      <div className={styles.content}>
        Expect a diverse array of content, ranging from in-depth analyses of
        your favorite video game narratives to reviews that dissect the latest
        anime releases and discussions about the ever-evolving landscape of
        comics. We aim to cater to the seasoned veterans and the curious
        newcomers alike, fostering a community that celebrates the shared joy of
        storytelling in all its forms.
      </div>
      <div className={styles.content}>
        <p>
          Join us on this exhilarating journey through pixels and pages, where
          every click unveils new adventures and every scroll reveals hidden
          gems. Whether you're seeking recommendations, thoughtful reflections,
          or simply a place to connect with like-minded individuals, [Website
          Name] is your passport to the realms of imagination.
        </p>
      </div>
      <div className={styles.content}>
        <p>
          Thank you for being part of our ever-growing community. Together,
          let's embark on a quest to explore, appreciate, and revel in the
          limitless wonders of video games, anime, comics, and beyond!
        </p>
      </div>
      <div className={styles.email}>
        <p>
          Do you need to get ahold of us quickly? Send an email to
          <span className={styles.pink}> info@verdant.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
