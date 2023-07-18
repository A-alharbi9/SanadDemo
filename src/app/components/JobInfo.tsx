import { HiOutlineArrowLeft } from 'react-icons/hi';

type jobProps = {
  type: string;
  title: string;
  desc: string;
  date: string;
};

function Jobinfo({ type, title, desc, date }: jobProps) {
  return (
    <div className="flex flex-col items-center justify-around rounded-t-[4rem] rounded-br-[4rem] h-[22rem] lg:max-h-[22rem] w-[95%] lg:w-[37rem] group bg-slate-50 hover:scale-105 transition duration-300 cursor-pointer mx-3 my-4 lg:my-0 lg:mx-0 lg:mb-[4rem]">
      <div className="flex flex-col justify-between w-[82%] min-h-[75%]">
        <p className="text-lg font-semibold text-blue-600">{type}</p>
        <p className="text-3xl font-bold transition duration-200 group-hover:text-green-500">
          {title}
        </p>

        <p className="my-2 font-light lg:text-lg text-slate-700">{desc}</p>

        <div className="flex items-center justify-between my-3">
          <p className="font-semibold lg:text-lg">{date}</p>
          <HiOutlineArrowLeft
            size={40}
            className="text-blue-300 transition duration-500 cursor-pointer group-hover:text-blue-500 group-hover:-translate-x-2 group-hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
}

export default Jobinfo;
