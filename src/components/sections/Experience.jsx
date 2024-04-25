import Image from "next/image";
import SubServices from "./SubServices";

const Experience = () => {
  const services = [
    {
      title: "Washing Machine Repair",
    },
    {
      title: "Refrigerator Repair",
    },
    {
      title: "Television Repair",
    },
    {
      title: "Stove/Cooker Repair",
    },
    {
      title: "Dishwasher Repair",
    },
    {
      title: "Gas Oven Repair",
    },
    {
      title: "Dryer Repair",
    },
  ];

  return (
    <>
      <div className="mx-auto w-full py-10 md:w-3/5">
        <div className="flex flex-col md:flex-row">
          <Image
            className="mx-auto flex"
            src="/pic3.jpg"
            width={400}
            height={400}
            alt="About Us"
          />
          <div className="px-5">
            <h1 className="mt-4 text-2xl font-bold tracking-wide text-black md:mt-2">
              We Have 20 Years Experience In This Passion
            </h1>
            <p className="mt-6 text-gray-500">
              Wide Home UAE Repairs established in Dubai and Abu Dhabi, provides
              home appliance repair and maintenance services over the phone.
              With over 10 years of experience in installing, repairing, and
              maintaining washing machines, stoves, ovens, gas ovens, TVs, LEDs,
              and more, we have successfully completed many complex tasks
              throughout Dubai and Abu Dhabi. In addition to our core specialty
              of Washing Machines, Dryer, Dishwashers, Stoves, we offer a wide
              range of services such as washing machine repairs and home
              appliance servicing for both private and corporate clients. Our
              focus is on providing cost-effective solutions, and we take pride
              in offering the best services in the Dubai and Abu Dhabi.
            </p>

            <div className="">
              <h2 className="py-3 text-lg font-bold tracking-wide ">
                Repair Services
              </h2>

              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <SubServices key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;