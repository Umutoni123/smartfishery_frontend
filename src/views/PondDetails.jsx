import React, { useEffect } from "react";
import Modal from "../components/Modal/Modal";
import {
  addRecording,
  selectRecordings,
  selectRecordingsDictionary,
  setRecordings,
} from "../store/modules/recordingsSlice";
import { useDispatch, useSelector } from "react-redux";
import AppServices from "../services";
import { selectUser } from "../store/modules/authSlice";
import {
  selectFishPonds,
  selectSelectedFishPond,
  setSelectedFishPond,
} from "../store/modules/fishPondsSlice";
import { useHistory } from "react-router-dom";
import Pusher from "pusher-js";

function PondDetails() {
  const recordings = useSelector(selectRecordings);
  const selectedFishPond = useSelector(selectSelectedFishPond);
  const recordingsDict = useSelector(selectRecordingsDictionary);
  const fishPonds = useSelector(selectFishPonds);
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const id = history.location.pathname.split("/").pop();

  // Pusher.logToConsole = true;

  var pusher = new Pusher("55d8c9266cc794b1f34d", {
    cluster: "mt1",
  });

  var channel = pusher.subscribe("fishPond." + id);
  channel.bind("newRecording", function (e) {
    dispatch(addRecording(e.recording));
  });

  // window.Pusher = pusher;

  // window.Echo = new Echo({
  //   broadcaster: "pusher",
  //   key: "55d8c9266cc794b1f34d",
  //   cluster: "mt1",
  //   encrypted: true,
  // });

  // window.Echo.channel("fishPond." + id).listen("newRecording", (e) => {
  //   console.log("new recording \n\n", e);
  // });

  useEffect(() => {
    // check if selectedFishPond is included in the url
    if (id != selectedFishPond?.id && fishPonds.length > 0) {
      // set the selected fish pond to the one in the url
      const fishPond = fishPonds.find((pond) => pond.id == id);
      dispatch(setSelectedFishPond(fishPond));
    }
  }, [fishPonds]);

  useEffect(() => {
    if (selectedFishPond?.id == id && recordings.length == 0) {
      // add id in path
      AppServices.getItems("recordings").then((response) => {
        if (response.data) {
          dispatch(setRecordings(Object.values(response.data.data)));
        }
      });
    }
  }, [selectedFishPond]);

  return (
    <div className="flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5">
      <h1 className="text-3xl font-bold">Fish Pond Details</h1>
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 pl-2">
            <button className="relative z-0 inline-flex text-sm ml-auto rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                <div className="hidden font-bold sm:block">
                  Predicted weight [mg]: {35}
                </div>
              </span>
            </button>
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
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Temperature (C)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      PH
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recordings.map((el) => (
                    <tr key={el.entry_id}>
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
                        {el.entry_id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {el.created_at}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {el.temperature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {el.ph}
                      </td>
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

export default PondDetails;
