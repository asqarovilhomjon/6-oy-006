import React from "react";

const Maninj = () => {
  return (
    <div className="">
      <h2 className="text-center mb-5 text-[20px] font-semibold">Ma'lumot</h2>

      <div className=" overflow-x-auto rounded-lg shadow  ">
        <table className="w-full overflow-x-auto">
          <thead className="bg-gray-50 border-[2px] border-gray-200 ">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Details
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Statust
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Data
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  1
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">18/8/2024</td>
              <td className="p-3 text-sm text-gray-700">300$ </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  2
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">16/02/2024</td>
              <td className="p-3 text-sm text-gray-700">100$ </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  3
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">01/10/2024</td>
              <td className="p-3 text-sm text-gray-700">200$ </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  4
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">16/04/2024</td>
              <td className="p-3 text-sm text-gray-700">500$ </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  5
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">16/09/2024</td>
              <td className="p-3 text-sm text-gray-700">300$ </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                <a className="font-bold text-blue-500 hover:underline" href="#">
                  6
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet ?
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Deliver
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">15/05/2024</td>
              <td className="p-3 text-sm text-gray-700">220$ </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Maninj;
