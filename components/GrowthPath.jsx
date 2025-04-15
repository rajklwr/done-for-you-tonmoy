import ServiceCard from "./ServiceCard";
const GrowthPath = () => {
  const servicesData = [
    {
      icon: "images/button-a.png",
      title: "Grow The Plant 🌱",
      //   pricing: "8-10 minutes = $70/video",
      description:
        "Perfect for beginners who want their first channel fully built and monetized.",
      description1:
        "We start your YouTube journey from scratch and take it all the way to monetization—with a written guarantee.",
      color: "#FBBF24", // Yellow
      extralines: [
        "✅ Built from scratch",
        "✅ Shorts + Longs",
        "✅ Monetized in 60 days",
      ],
    },
    {
      icon: "images/button-b.png",
      title: " 6-Month Acceleration",
      //   pricing: "8-10 minutes = $85/video",
      description: "Want to keep growing even after monetization?",
      description1:
        "This program is for those who want to scale fast, switch niches freely, and work closely with us until their channel is profitable.",
      color: "#EC4899", // Pink
      extralines: [
        "✅ 🔒 Pricing available after consultation.",
        "⚠️ Limited spots—this program is only for serious creators and investors.",
      ],
    },
    {
      icon: "images/button-c.png",
      title: "🏆 12-Month    Elite",
      //   pricing: "8-10 minutes = $100/video",
      description: "Want to keep growing even after monetization?",
      description1:
        "This program is for those who want to scale fast, switch niches freely, and work closely with us until their channel is profitable.",
      color: "#06B6D4", // Cyan
      extralines: [
        "✅ 🔒 Private pricing shared after qualification.",
        "✅ 🔒 Apply now to learn more.",
      ],
    },
  ];
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white px-2 sm:px-12 md:px-16 lg:px-20 sm:py-16">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-center sm:mb-12">
        3 WAYS TO WORK WITH US - CHOOSE YOUR GROWTH PATH
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
            pricing={service.pricing}
            extralines={service.extralines}
            description1={service.description1}
          />
        ))}
      </div>
    </div>
  );
};

export default GrowthPath;
