import React from 'react';
import ServiceCard from './ServiceCard';
import UnderlineHeader from './UnderlineHeader';

const Services = () => {
  const servicesData = [
    {
      icon: 'images/button-a.png',
      title: 'Grow The Plant',
      description:
        'Start from scratch with a guaranteed path to monetization in just 2 months or more. We build, optimize, and position your channel for success—no guesswork, just results.',
      color: '#FBBF24', // Yellow
    },
    {
      icon: 'images/button-b.png',
      title: '6-Months Program',
      description:
        'We work with you until your channel becomes profitable—no time limits, just pure dedication. Want to switch niches? No problem! We pivot, refine, and maximize your success.',
      color: '#EC4899', // Pink
    },
    {
      icon: 'images/button-c.png',
      title: '12-Months Program',
      description:
        'Everything in the 6-Months Program PLUS our exclusive buyback option—if you don’t hit the expected ROI, we buy your channel back. Zero risk, only rewards.',
      color: '#06B6D4', // Cyan
    },
  ];

  return (
    <div className="py-12">
      <UnderlineHeader title="Services" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
