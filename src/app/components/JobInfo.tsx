import { HiOutlineArrowLeft } from 'react-icons/hi';

type jobProps = {
  type: string;
  title: string;
  desc: string;
  date: string;
};

function Jobinfo({ type, title, desc, date }: jobProps) {
  return (
    <div className="flex justify-around w-[90%] lg:w-[90rem] basis-[33%] my-4">
      <div className="flex flex-col items-center justify-around rounded-t-[3rem] rounded-br-[3rem] h-80 w-[95%] lg:w-[38rem] bg-slate-50">
        <div className="flex flex-col justify-between h-[70%] w-[80%]">
          <p className="font-semibold text-blue-600">{type}</p>
          <p className="my-3 text-2xl font-bold">{title}</p>

          <p className=" text-slate-700">{desc}</p>

          <div className="flex items-center justify-between mt-3">
            <p className="font-semibold ">{date}</p>
            <HiOutlineArrowLeft
              size={40}
              className="text-blue-300 transition duration-200 cursor-pointer hover:text-blue-500 hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobinfo;
