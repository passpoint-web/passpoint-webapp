
import ScrollReveal from "./ScrollReveal";

const onboardingSteps = [
  {
    num: 1,
    title: "Discovery Session",
    desc: "Tailored onboarding session with Passpoint's compliance and integration team.",
    color: "from-[#51b5fa] to-[#1e90ec]"
  },
  {
    num: 2,
    title: "Guided Onboarding",
    desc: "Guided API and product integration with 1:1 technical support.",
    color: "from-[#fad961] to-[#f76b1c]"
  },
  {
    num: 3,
    title: "Go Live with Confidence",
    desc: "Serve customers across Africa immediately after compliance and integration steps.",
    color: "from-[#4dff8f] to-[#24c6dc]"
  },
];

const Onboarding = () => (
  <section className="w-full py-16" id="onboarding">
    <div className="max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get Started In 3 Easy Steps</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {onboardingSteps.map(step => (
          <ScrollReveal key={step.num} delay={step.num * 200}>
            <div className={`rounded-xl p-7 shadow-lg transition-all duration-300 bg-gradient-to-br ${step.color} text-white hover:shadow-xl hover:scale-105 group`}>
              <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"> {step.num}. </div>
              <div className="font-semibold mb-1 text-lg">{step.title}</div>
              <p className="text-base">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Onboarding;
