import Heading from "./Heading";
const MonetizationSection = () => {
    return (
      <div className="min-h-screen w-full bg-[#121212] text-white px-2 sm:px-12 md:px-16 lg:px-20 sm:py-16">
        <Heading title="OVER 150+ CHANNELS MONETIZED. $10 MILLION+ REVENUE GENERATED FOR CLIENTS 💰" />
  
        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-0">

  
          <div className="w-full lg:w-[400px] rounded-lg shadow-lg sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
            <img
              src="/images/revenue-phone.png"
              alt="Revenue Phone"
              className="mt-6 sm:ml-0 -ml-8 rounded-lg shadow-md h-[500px] "
            />
          </div>

          <div className="text-center max-w-md lg:max-w-lg">
            <div className="bg-[#6abcff] rounded-md text-left px-4" >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 ">WE DON&apos;T PROMISE--WE SHOW</h3>
                </div>
            <ul className="text-lg space-y-4">
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                Real Result
              </li>
              <li className="flex items-start text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                Everything is transparent! Talk with the team members directly
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                Work with written guarantee
              </li>
            </ul>

            <div className="bg-[#6abcff] mt-8 lg:mt-16 rounded-md  text-left px-4 " >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-xl ">FREE BONUS-</h3>
                </div>
            <ul className="text-lg space-y-4">
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                 A set number of free shorts/month at least 10 (Worth $150)
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                 Each month 2 free videos (Worth $170)
              </li>
              <li className="flex items-center text-left gap-3">
                <img src="/images/icon-checked.png" alt="Checked Icon" className="w-6 h-6" />
                 Access to the exclusive Growth Secrets Community (Worth $500)
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default MonetizationSection;
  