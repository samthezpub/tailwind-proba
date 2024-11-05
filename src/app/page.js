import Image from "next/image";

export default function Home() {
  return (
      <div className="cards w-max grid max-sm:grid-cols-1 sm:grid-cols-2 max-md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-rows-[200px_minmax(200px,1fr)_1fr] grid-cols-[200px_minmax(200px,_200px)_1fr]  p-2">
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2 after:content-['Hello']">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
          <div className="card flex flex-col justify-center items-center border-2 border-amber-200 w-40 h-52">
              <span
                  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 font-['Tahoma'] text-2xl px-2">Hello World</span>
              <p>300.00 P</p>
          </div>
      </div>
  );
}
