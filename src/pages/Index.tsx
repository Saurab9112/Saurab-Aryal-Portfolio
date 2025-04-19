
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { SkillBar } from "@/components/ui/skill-bar";
import { Github, Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-teal-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Saurab Aryal
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Data Analyst | Turning Data into Insights
            </h2>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="bg-white text-teal-600 px-6 py-3 rounded-lg border border-teal-600 hover:bg-teal-50 transition-colors">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm Saurab Aryal, a Sydney-based Data Analyst passionate about extracting meaning from messy data and turning it into strategic insights. With hands-on experience in data visualization, automation, and reporting, I bring clarity and precision to complex datasets.
            </p>
            <p className="text-lg text-gray-600">
              I thrive in collaborative environments and love building interactive dashboards that drive real business results. Whether it's streamlining operations or identifying growth opportunities, I bring analytical thinking and attention to detail to everything I do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Data Analysis & Scripting</h3>
              <SkillBar name="SQL" percentage={90} />
              <SkillBar name="Python" percentage={85} />
              <SkillBar name="Data Visualization" percentage={88} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Business Tools</h3>
              <SkillBar name="Tableau" percentage={92} />
              <SkillBar name="Power BI" percentage={88} />
              <SkillBar name="Excel" percentage={95} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-12">
            <ExperienceCard
              title="Junior Data Analyst"
              company="Extratech Pty Ltd"
              period="Mar 2024 – Present"
              location="Hurstville, Sydney"
              description={[
                "Automated data pipelines using Python (Pandas), reducing manual processing by 30%",
                "Analyzed student data to enhance marketing strategies and improve retention by 23%",
                "Built Tableau and Power BI dashboards for department-wide visibility on KPIs"
              ]}
            />
            <ExperienceCard
              title="Parts Interpreter"
              company="Capital SMART Repairs AMA Group"
              period="Oct 2022 – Feb 2024"
              location="Ingleburn, Sydney"
              description={[
                "Managed inventory and vendor relationships using Microsoft Dynamics (NAV)",
                "Processed VIN-based part orders, maintained accurate records",
                "Coordinated credits and replacements to streamline vendor communication"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Student Retention Dashboard"
              description="Built a dashboard that visualized student performance, enrolment trends, and retention metrics using Power BI & SQL."
              tools={["Power BI", "SQL", "Data Analysis"]}
            />
            <ProjectCard
              title="Data Automation Script"
              description="Automated the cleaning and transformation of student data into weekly insights using Python, reducing manual reporting time by 30%."
              tools={["Python", "Pandas", "Automation"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem icon={<Mail />} text="saurabaryal1293@gmail.com" />
                <ContactItem icon={<Phone />} text="0451 130 029" />
                <ContactItem icon={<MapPin />} text="Sydney, NSW" />
                <div className="flex space-x-4 mt-6">
                  <SocialButton href="https://github.com" icon={<Github />} />
                  <SocialButton href="https://linkedin.com" icon={<Linkedin />} />
                  <SocialButton href="mailto:saurabaryal1293@gmail.com" icon={<Mail />} />
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const ExperienceCard = ({ title, company, period, location, description }: {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-2">{company}</p>
    <p className="text-gray-500 text-sm mb-4">{period} | {location}</p>
    <ul className="list-disc list-inside space-y-2">
      {description.map((item, index) => (
        <li key={index} className="text-gray-600">{item}</li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ title, description, tools }: {
  title: string;
  description: string;
  tools: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <span key={tool} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
          {tool}
        </span>
      ))}
    </div>
  </motion.div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3">
    <span className="text-gray-600">{icon}</span>
    <span className="text-gray-600">{text}</span>
  </div>
);

const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </a>
);

const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        rows={4}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
    >
      Send Message
    </button>
  </form>
);

export default Index;
