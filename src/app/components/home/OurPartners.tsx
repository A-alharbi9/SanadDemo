function OurPartners() {
  return (
    <div className="flex flex-col justify-center lg:justify-between items-center h-[75rem] lg:h-[35rem]">
      <div className="flex flex-col justify-around items-center w-full h-[95%] lg:h-[90%]">
        <p className="text-4xl text-center lg:text-4xl font-bold lg:w-full">
          شركاء النجاح ﻣﻊ اﻟﻌﺪﻳﺪ ﻣﻦ ﻣﺰودي اﻟﺒﻴﺎﻧﺎت واﻟﺨﺪﻣﺎت
        </p>
        <div className="flex flex-col items-center justify-around w-full lg:w-[min(100%,90rem)] h-[60rem] lg:h-[15rem]">
          <div className="flex flex-col-reverse lg:flex-row justify-around items-center w-full lg:w-[min(95%,75rem)] h-[45rem] lg:h-[5rem]">
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Pinterest.svg"
              alt="Pinterest_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-46"
              src="../assets/logos/Twitch.svg"
              alt="Twitch_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Youtube.svg"
              alt="Youtube_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Facebook.svg"
              alt="Facebook_logo"
            />
            <img
              className="my-1 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Google.svg"
              alt="Google_logo"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-around items-center w-full lg:w-[min(95%,75rem)] lg:h-[5rem] h-[45rem]">
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Product_hunt.svg"
              alt="Product_hunt_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Dribbble.svg"
              alt="Dribbble_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Discord.svg"
              alt="Discord_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Webflow.svg"
              alt="Webflow_logo"
            />
            <img
              className="my-3 lg:my-0 lg:mx-3 w-48"
              src="../assets/logos/Behance.svg"
              alt="Behance_logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
