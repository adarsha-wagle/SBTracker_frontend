import React, { useEffect } from "react";
import RouteDetailContent from "./route_details_content";
import { useDispatch } from "react-redux";

import { fetchStudentListAsync } from "../../redux/routeSlice";
function RouteDetailsMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentListAsync());
  }, [dispatch]);
  return (
    <div>
      <RouteDetailContent />
    </div>
  );
}

export default RouteDetailsMain;
