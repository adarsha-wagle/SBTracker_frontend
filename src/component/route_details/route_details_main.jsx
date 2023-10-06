import React, { useEffect } from "react";
import RouteDetailContent from "./route_details_content";
import { useDispatch } from "react-redux";

import { fetchStudentListAsync } from "../../redux/routeSlice";
import NavBar from "../nav_bar/nav_bar";
function RouteDetailsMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentListAsync());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <RouteDetailContent />
    </div>
  );
}

export default RouteDetailsMain;
