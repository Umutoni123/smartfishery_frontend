import React from "react";
import Modal from "../Modal/Modal";

export default function Table() {
  const closeModal = () => {
    setShowModal({ modal: "", closed: true });
  };
  const [showModal, setShowModal] = React.useState({ modal: "", closed: true });
  return (
    <div className="flex flex-col w-full">
      {!showModal.closed && (
        <Modal>
          {showModal.modal === "delete" ? (
            <div className="w-full max-w-xl mx-auto overflow-hidden bg-white rounded-xl">
              <div className="max-w-sm px-5 pt-12 pb-8 mx-auto text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF4842"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h4 className="mb-5 text-xl font-semibold text-black">
                  Think twice. Are you sure?
                </h4>
                <p className="font-medium text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus atque culpa voluptas a ad ducimus corrupti nulla?
                </p>
              </div>
              <div className="px-6 pt-5 pb-6 -mb-2 text-right bg-white">
                <button
                  onClick={closeModal}
                  className="inline-block w-full px-5 py-3 mb-2 mr-4 font-semibold leading-6 text-center text-white transition duration-200 bg-gray-500 rounded-lg sm:w-auto hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                >
                  Yes, delete
                </button>
              </div>
            </div>
          ) : showModal.modal === "add" ? (
            <div className="max-w-xl mx-auto overflow-hidden bg-white px-7 rounded-xl">
              <div className="flex flex-col items-start justify-center h-full py-7 bg-blueGray-100">
                <form className="mx-auto md:max-w-lg">
                  <label className="block mb-4">
                    <p className="mb-2 font-semibold leading-normal text-gray-900">
                      Pond name *
                    </p>
                    <input
                      className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      id="signInInput1-1"
                      type="text"
                      placeholder="Enter pond name"
                    />
                  </label>
                  <label className="block mb-5">
                    <p className="mb-2 font-semibold leading-normal text-gray-900">
                      Location *
                    </p>
                    <select className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300">
                      <option value="">Rusizi, Kamembe</option>
                      <option value="">Kicukiro, Kagarama</option>
                      <option value="">Nyabihu, Mukamira</option>
                    </select>
                  </label>
                </form>
              </div>
              <div className="px-6 pt-1 pb-6 -mb-2 text-right bg-white">
                <button
                  onClick={closeModal}
                  className="inline-block w-full px-5 py-3 mb-2 mr-4 font-semibold leading-6 text-center text-white transition duration-200 bg-gray-500 rounded-lg sm:w-auto hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            showModal.modal === "edit" && (
              <div className="max-w-xl mx-auto overflow-hidden bg-white px-7 rounded-xl">
                <div className="flex flex-col items-start justify-center h-full py-7 bg-blueGray-100">
                  <form className="mx-auto md:max-w-lg">
                    <label className="block mb-4">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Pond name *
                      </p>
                      <input
                        value="Kicukiro pond"
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="signInInput1-1"
                        type="text"
                        placeholder="Enter pond name"
                      />
                    </label>
                    <label className="block mb-5">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Location *
                      </p>
                      <select className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300">
                        <option value="">Rusizi, Kamembe</option>
                        <option value="">Kicukiro, Kagarama</option>
                        <option value="">Nyabihu, Mukamira</option>
                      </select>
                    </label>
                  </form>
                </div>
                <div className="px-6 pt-1 pb-6 -mb-2 text-right bg-white">
                  <button
                    onClick={closeModal}
                    className="inline-block w-full px-5 py-3 mb-2 mr-4 font-semibold leading-6 text-center text-white transition duration-200 bg-gray-500 rounded-lg sm:w-auto hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )
          )}
        </Modal>
      )}
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setShowModal({ modal: "add", closed: false })}
                className="relative z-0 inline-flex text-sm ml-auto rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
              >
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="hidden font-bold sm:block">
                    Add new fish pond
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Pond ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Pond Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Pond 1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kicukiro
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Kigali P.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Nyamirambo
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "edit", closed: false })
                      }
                      className="text-green-500 hover:text-green-700"
                      href="#"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      onClick={() =>
                        setShowModal({ modal: "delete", closed: false })
                      }
                      className="text-red-500 hover:text-red-700"
                      href="#"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
