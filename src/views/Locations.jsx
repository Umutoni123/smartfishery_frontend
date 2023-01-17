import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import { selectLocations, setLocations } from "../store/modules/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Cells, Districts, Provinces, Sectors } from "rwanda";
import AppServices from "../services";
import toast from "react-hot-toast";
import { selectUser } from "../store/modules/authSlice";

function Locations() {
  const locations = useSelector(selectLocations);
  const user = useSelector(selectUser);
  const closeModal = () => {
    setShowModal({ modal: "", closed: true });
  };
  const [showModal, setShowModal] = useState({ modal: "", closed: true });
  const [locationInfo, setLocationInfo] = React.useState({
    location_name: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    toast.promise(AppServices.createItem("locations", locationInfo), {
      loading: "Creating location ...",
      success: (response) => {
        dispatch(setLocations([...locations, response.data.data]));
        closeModal();
        return "Location created successfully";
      },
      error: (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        return message;
      },
    });
  };

  const handleEdit = () => {
    toast.promise(
      AppServices.updateItem(`locations/${locationInfo.id}`, locationInfo),
      {
        loading: "Editing location ...",
        success: (response) => {
          dispatch(
            setLocations([
              ...locations.filter(
                (location) => location.id !== locationInfo.id
              ),
              response.data.data,
            ])
          );
          closeModal();
          return "Location edited successfully";
        },
        error: (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          return message;
        },
      }
    );
  };

  const handleDelete = () => {
    toast.promise(AppServices.deleteItem(`locations/${locationInfo.id}`), {
      loading: "Deleting location ...",
      success: (response) => {
        dispatch(
          setLocations([
            ...locations.filter((location) => location.id !== locationInfo.id),
          ])
        );
        closeModal();
        return "Location deleted successfully";
      },
      error: (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        return message;
      },
    });
  };

  return (
    <div className="flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5">
      <h1 className="text-3xl font-bold">Fish Locations</h1>
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
                    Once you delete this location, there is no going back.
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
                    onClick={handleDelete}
                    className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                  >
                    Yes, delete
                  </button>
                </div>
              </div>
            ) : showModal.modal === "add" ? (
              <div className="max-w-xl mx-auto overflow-hidden bg-white px-7 rounded-xl">
                <div className="flex flex-col items-start justify-center h-full py-7 bg-blueGray-100">
                  <form
                    className="mx-auto md:max-w-lg"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <label className="block mb-4">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Location name *
                      </p>
                      <input
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="signInInput1-1"
                        type="text"
                        required
                        onChange={(e) =>
                          setLocationInfo({
                            ...locationInfo,
                            location_name: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label className="block mb-5">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Province *
                      </p>
                      <select
                        required
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        onChange={(e) =>
                          setLocationInfo({
                            ...locationInfo,
                            province: e.target.value,
                          })
                        }
                      >
                        <option value=""></option>
                        {Provinces().map((el) => (
                          <option key={el} value={el}>
                            {el}
                          </option>
                        ))}
                      </select>
                    </label>
                    {locationInfo.province !== "" && (
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          District *
                        </p>
                        <select
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              district: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Districts(locationInfo.province).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    {locationInfo.district !== "" && (
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Sector *
                        </p>
                        <select
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              sector: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Sectors(
                            locationInfo.province,
                            locationInfo.district
                          ).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    {locationInfo.sector !== "" && (
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Cell *
                        </p>
                        <select
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              cell: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Cells(
                            locationInfo.province,
                            locationInfo.district,
                            locationInfo.sector
                          ).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    <input type="submit" value="" hidden id="create" />
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
                    className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                    onClick={() => {
                      document.getElementById("create").click();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              showModal.modal === "edit" && (
                <div className="max-w-xl mx-auto overflow-hidden bg-white px-7 rounded-xl">
                  <div className="flex flex-col items-start justify-center h-full py-7 bg-blueGray-100">
                    <form
                      className="mx-auto md:max-w-lg"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEdit();
                      }}
                    >
                      <label className="block mb-4">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Location name *
                        </p>
                        <input
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          id="signInInput1-1"
                          type="text"
                          defaultValue={locationInfo.location_name}
                          placeholder="Enter pond location_name"
                          required
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              location_name: e.target.value,
                            })
                          }
                        />
                      </label>
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Province *
                        </p>
                        <select
                          defaultValue={locationInfo.province}
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              province: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Provinces().map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          District *
                        </p>
                        <select
                          defaultValue={locationInfo.district}
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              district: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Districts(locationInfo.province).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Sector *
                        </p>
                        <select
                          defaultValue={locationInfo.sector}
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              sector: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Sectors(
                            locationInfo.province,
                            locationInfo.district
                          ).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block mb-5">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Cell *
                        </p>
                        <select
                          defaultValue={locationInfo.cell}
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setLocationInfo({
                              ...locationInfo,
                              cell: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {Cells(
                            locationInfo.province,
                            locationInfo.district,
                            locationInfo.sector
                          ).map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </label>
                      <input type="submit" value="" hidden id="create" />
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
                      className="inline-block w-full px-5 py-3 mb-2 font-semibold leading-6 text-center transition duration-200 bg-red-500 rounded-lg sm:w-auto text-blue-50 hover:bg-red-600"
                      onClick={() => {
                        document.getElementById("create").click();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )
            )}
          </Modal>
        )}
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 pl-2">
            <div className="flex items-center space-x-2">
              <div className="relative">
                {user?.type !== "rab" && (
                  <>
                    <button
                      onClick={() =>
                        setShowModal({ modal: "add", closed: false })
                      }
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
                          Add new location
                        </div>
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th scope="col" className="py-3 pl-4">
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
                    </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Location ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Location Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Province/District/Sector/Cell
                    </th>
                    {user?.type !== "rab" && (
                      <>
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
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {locations.map((location) => (
                    <tr>
                      {/* <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td> */}
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {location.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {location.location_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {`${location.province}, ${location.district}, ${location.sector}, ${location.cell}`}
                      </td>
                      {user?.type !== "rab" && (
                        <>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              onClick={() => {
                                setLocationInfo(location);
                                setShowModal({ modal: "edit", closed: false });
                              }}
                              className="text-green-500 hover:text-green-700"
                              href="#"
                            >
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              onClick={() => {
                                setLocationInfo(location);
                                setShowModal({
                                  modal: "delete",
                                  closed: false,
                                });
                              }}
                              className="text-red-500 hover:text-red-700"
                              href="#"
                            >
                              Delete
                            </a>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
