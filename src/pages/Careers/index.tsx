import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaRocket, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-6">🚀 Careers at Benchmark Insurance Group</h1>
        <p className="text-2xl mb-8">Where High Performers Go to Rise</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://riseconstructiontx.bamboohr.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Apply Now
          </a>
          <a
            href="https://www.linkedin.com/company/benchmark-insurance-group-of-texas/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeelingStuckSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">📣 Feeling Stuck at a Big Firm?</h2>
          <p className="text-lg text-gray-700 mb-4">
            There's a Better Way to Build Your Career.
          </p>
          <p className="text-gray-600">
            At Benchmark Insurance Group, we meet professionals every day who've hit a wall at large brokerages—buried under bureaucracy, locked into narrow roles, or boxed out of leadership paths.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">We're Building Something Special</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Resources of a major firm with the agility of a startup</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Direct path to leadership and growth</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Innovation-driven culture</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const PerksGrid = () => {
  const perks = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: "Room to Grow",
      description: "No waiting for someone to retire to get promoted. If you perform, you lead.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Make an Impact—Now",
      description: "Every person plays a strategic role in client success and company growth.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Entrepreneurial Energy",
      description: "Proprietary technology and resources to scale your ideas fast.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-600" />,
      title: "Leadership that Listens",
      description: "Direct access to executives who value your input and reward initiative.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🌟 Why Join Benchmark?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{perk.icon}</div>
              <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerDevelopmentSteps = () => {
  const steps = [
    {
      title: "Personalized Onboarding & Strategic Planning",
      description: "90-day success plan aligned to your goals, with role clarity and performance benchmarks.",
    },
    {
      title: "Role Evolution & Opportunity Tracks",
      description: "Three career tracks: Expert, Leadership, and Producer paths with clear progression.",
    },
    {
      title: "Professional Growth & Mentorship",
      description: "Quarterly growth sessions, sales intensives, and executive roundtables.",
    },
    {
      title: "Performance-Based Promotions",
      description: "Merit-based advancement with opportunities to lead initiatives and build teams.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">📈 Your Career Development Plan</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerTrackCards = () => {
  const tracks = [
    {
      title: "Expert Track",
      description: "For client-focused roles like Account Managers, where mastery and retention are key.",
      features: ["Deep specialization", "Client relationship building", "Technical excellence"],
    },
    {
      title: "Leadership Track",
      description: "For those ready to lead teams, departments, or business units.",
      features: ["Team management", "Strategic planning", "Business development"],
    },
    {
      title: "Producer Track",
      description: "For revenue drivers who want unlimited earning potential, support, and autonomy.",
      features: ["Business development", "Client acquisition", "Revenue growth"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🔄 Career Tracks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{track.title}</h3>
              <p className="text-gray-600 mb-4">{track.description}</p>
              <ul className="space-y-2">
                {track.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoThrivesHere = () => {
  const profiles = [
    "Professionals at big firms who are tired of the red tape",
    "Service leaders who want more influence and autonomy",
    "Producers who crave speed, innovation, and high-margin opportunities",
    "Account managers who want to move into strategy and leadership",
    "People who think like owners—but haven't had the platform to perform like one",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🧠 Who Thrives Here?</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {profiles.map((profile, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-lg">{profile}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I went from being a number to being a leader in under a year. At Benchmark, the ceiling is what you build.",
      author: "Melynda",
      role: "VP of Business Development",
    },
    {
      quote: "The support is real. I finally get to run my book my way—with the tech and team behind me to grow it.",
      author: "Caleb",
      role: "Commercial Accounts Manager",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">💬 What Our Team Says</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => (
  <section className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">🎯 Ready to Flourish?</h2>
      <p className="text-xl mb-8">
        This is your chance to break out of the mold and build something that reflects your ambition.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="https://riseconstructiontx.bamboohr.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Apply Now
        </a>
        <a
          href="https://www.linkedin.com/company/benchmark-insurance-group-of-texas/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const Careers = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeelingStuckSection />
      <PerksGrid />
      <CareerDevelopmentSteps />
      <CareerTrackCards />
      <WhoThrivesHere />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Careers; 