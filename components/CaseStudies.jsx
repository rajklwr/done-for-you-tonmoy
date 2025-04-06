import React from 'react';
import UnderlineHeader from './UnderlineHeader';

const CaseStudies = () => {
  const caseStudyImages = Array.from({ length: 18 }, (_, i) => `/images/case-studies/${i + 1}.png`);
    const caseStudyImagesLandscape = Array.from({ length: 12 }, (_, i) => `/images/case-study-landscape/${i + 1}.png`);

  // Duplicate the image array for seamless infinite scrolling
  const scrollingImages = [...caseStudyImages, ...caseStudyImages];
  const scrollingImagesLandscape = [...caseStudyImagesLandscape, ...caseStudyImagesLandscape];

  return (
    <section className="text-white py-16 px-6">
      <div className="text-center mb-12">
        {/* Section Title */}
        <UnderlineHeader title={"CASE STUDIES"} />
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="overflow-hidden">
        <div className="flex animate-horizontal-loop py-4 space-x-6">
          {scrollingImages.map((image, index) => (
            <div
              key={index}
              className="min-w-[200px] group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Case Study ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden mt-16">
        <div className="flex animate-horizontal-loop py-4 space-x-6">
          {scrollingImagesLandscape.map((image, index) => (
            <div
              key={index}
              className=" min-w-[400px] group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Case Study ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
