import React from "react";
import Modal from "../components/Modal/Modal";
import {
  selectPondEnvironments,
  setPondEnvironments,
} from "../store/modules/pondEnvironmentsSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AppServices from "../services";
import {
  selectFishTypes,
  selectFishTypesDictionary,
} from "../store/modules/fishTypesSlice";
import {
  selectFishPonds,
  selectFishPondsDictionary,
} from "../store/modules/fishPondsSlice";
import { selectUser } from "../store/modules/authSlice";

function PondEnvironmentss() {
  const pondEnvironments = useSelector(selectPondEnvironments);
  const fishTypes = useSelector(selectFishTypes);
  const fishTypesDict = useSelector(selectFishTypesDictionary);
  const fishPonds = useSelector(selectFishPonds);
  const fishPondsDict = useSelector(selectFishPondsDictionary);
  const user = useSelector(selectUser);
  const closeModal = () => {
    setShowModal({ modal: "", closed: true });
  };
  const [showModal, setShowModal] = React.useState({ modal: "", closed: true });
  const [pondEnvironmentInfo, setPondEnvironmentsInfo] = React.useState({
    id: "",
    temperature: "",
    ph: "",
    pond_id: "",
    fish_type: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    toast.promise(
      AppServices.createItem("pond_environments", pondEnvironmentInfo),
      {
        loading: "Creating pondEnvironment ...",
        success: (response) => {
          dispatch(
            setPondEnvironments([...pondEnvironments, response.data.data])
          );
          closeModal();
          return "PondEnvironment created successfully";
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

  const handleEdit = () => {
    toast.promise(
      AppServices.updateItem(
        `pond_environments/${pondEnvironmentInfo.id}`,
        pondEnvironmentInfo
      ),
      {
        loading: "Editing pondEnvironment ...",
        success: (response) => {
          dispatch(
            setPondEnvironments([
              ...pondEnvironments.filter(
                (el) => el.id !== pondEnvironmentInfo.id
              ),
              response.data.data,
            ])
          );
          closeModal();
          return "PondEnvironments edited successfully";
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
    toast.promise(
      AppServices.deleteItem(`pond_environments/${pondEnvironmentInfo.id}`),
      {
        loading: "Deleting pondEnvironment ...",
        success: (response) => {
          dispatch(
            setPondEnvironments([
              ...pondEnvironments.filter(
                (pondEnvironments) =>
                  pondEnvironments.id !== pondEnvironmentInfo.id
              ),
            ])
          );
          closeModal();
          return "PondEnvironment deleted successfully";
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

  return (
    <div className="flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5">
      <h1 className="text-3xl font-bold">Pond Environments</h1>
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
                    Once you delete this pondEnvironment, there is no going
                    back.
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
                        Temperature *
                      </p>
                      <input
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        onChange={(e) =>
                          setPondEnvironmentsInfo({
                            ...pondEnvironmentInfo,
                            temperature: e.target.value,
                          })
                        }
                        type="number"
                      />
                    </label>
                    <label className="block mb-4">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        PH *
                      </p>
                      <input
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        onChange={(e) =>
                          setPondEnvironmentsInfo({
                            ...pondEnvironmentInfo,
                            ph: e.target.value,
                          })
                        }
                        type="number"
                      />
                    </label>
                    <label className="block mb-4">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Fish pond *
                      </p>
                      <select
                        required
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        onChange={(e) =>
                          setPondEnvironmentsInfo({
                            ...pondEnvironmentInfo,
                            pond_id: e.target.value,
                          })
                        }
                      >
                        <option value=""></option>
                        {fishPonds.map((el) => (
                          <option key={el.id} value={el.id}>
                            {el.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block mb-4">
                      <p className="mb-2 font-semibold leading-normal text-gray-900">
                        Fish type *
                      </p>
                      <select
                        required
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        onChange={(e) =>
                          setPondEnvironmentsInfo({
                            ...pondEnvironmentInfo,
                            fish_type: e.target.value,
                          })
                        }
                      >
                        <option value=""></option>
                        {fishTypes.map((el) => (
                          <option key={el.id} value={el.id}>
                            {el.fish_name}
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
                    onClick={() => {
                      document.getElementById("create").click();
                    }}
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
                    <form
                      className="mx-auto md:max-w-lg"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEdit();
                      }}
                    >
                      <label className="block mb-4">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Temperature *
                        </p>
                        <input
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setPondEnvironmentsInfo({
                              ...pondEnvironmentInfo,
                              temperature: e.target.value,
                            })
                          }
                          defaultValue={pondEnvironmentInfo.temperature}
                          type="number"
                        />
                      </label>
                      <label className="block mb-4">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          PH *
                        </p>
                        <input
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setPondEnvironmentsInfo({
                              ...pondEnvironmentInfo,
                              ph: e.target.value,
                            })
                          }
                          defaultValue={pondEnvironmentInfo.ph}
                          type="number"
                        />
                      </label>
                      <label className="block mb-4">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Fish pond *
                        </p>
                        <select
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          onChange={(e) =>
                            setPondEnvironmentsInfo({
                              ...pondEnvironmentInfo,
                              pond_id: e.target.value,
                            })
                          }
                          defaultValue={pondEnvironmentInfo.pond_id}
                        >
                          <option value=""></option>
                          {fishPonds.map((el) => (
                            <option key={el.id} value={el.id}>
                              {el.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block mb-4">
                        <p className="mb-2 font-semibold leading-normal text-gray-900">
                          Fish type *
                        </p>
                        <select
                          required
                          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          defaultValue={pondEnvironmentInfo.fish_type}
                          onChange={(e) =>
                            setPondEnvironmentsInfo({
                              ...pondEnvironmentInfo,
                              fish_type: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          {fishTypes.map((el) => (
                            <option key={el.id} value={el.id}>
                              {el.fish_name}
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
                      onClick={() => {
                        document.getElementById("create").click();
                      }}
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
                {user?.type !== "rab" && (
                  <>
                    <button
                      onClick={() =>
                        setShowModal({ modal: "add", closed: false })
                      }
                      className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
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
                          Add new pond environment
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
                      Environment ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Temperature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      PH
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Fish pond
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Fish type
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
                  {pondEnvironments.map((pondEnvironment) => (
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
                        {pondEnvironment.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {pondEnvironment.temperature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {pondEnvironment.ph}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {fishPondsDict[pondEnvironment.pond_id]?.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {fishTypesDict[pondEnvironment.fish_type]?.fish_name}
                      </td>
                      {user?.type !== "rab" && (
                        <>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              onClick={() => {
                                setPondEnvironmentsInfo(pondEnvironment);
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
                                setPondEnvironmentsInfo(pondEnvironment);
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

export default PondEnvironmentss;
