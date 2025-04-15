const Solution = () => {
    return (
      <div className="min-h-screen w-full bg-[#121212] text-white px-2 sm:px-12 md:px-16 lg:px-20 sm:py-16">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-center sm:mb-12">
          WHY MOST CREATORS FAIL... AND OUR CLIENTS DON&apos;T
        </h2>
  
        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0">

  
          <div className="w-full lg:w-[400px] rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
            <img
              src="/images/tonmoy.png"
              alt="Revenue Phone"
              className="mt-6 sm:ml-0 -ml-8 rounded-lg shadow-md h-[500px] "
            />
          </div>

          <div className="text-center max-w-md lg:max-w-lg">
            <div className="bg-[#6abcff] rounded-md text-left px-4" >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 ">GIVE UP AFTER - 20 VIDEOS</h3>
                </div>
            <ul className="text-lg space-y-4">
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-cross.png" alt="Checked Icon" className="w-6 h-6" />
                Wrong niche selection
              </li>
              <li className="flex items-start text-left gap-3">
                <img src="/images/icon-cross.png" alt="Checked Icon" className="w-6 h-6" />
                No idea what to post
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-cross.png" alt="Checked Icon" className="w-6 h-6" />
                Didn&apos;t find a good team
              </li>
            </ul>

            <div className="bg-[#6abcff] mt-8 lg:mt-16 rounded-md  text-left px-4 " >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-xl ">MY SOLUTION</h3>
                </div>
            <ul className="text-lg space-y-4">
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                 We use the S&D Method to create high-demand videos with maximum viral potential.
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                 It&apos;s completely Done-For-You
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                📈 Guaranteed Results
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Solution;
  