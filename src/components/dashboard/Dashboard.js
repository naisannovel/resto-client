import React from "react";
import { Navbar, NavbarText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlusSquare, faThList, faSignOutAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
import AddDish from './AddDish';
import ManageDish from "./ManageDish";
import OrderList from "./OrderList";

const Dashboard = () => {

    
    const dashboardSidebar = (
      <>
        <a href=''>
          <FontAwesomeIcon icon={faList} /> Order List
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faPlusSquare} /> Add Services
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faThList} /> Manage Services
        </a>
      </>
    );

  return (
    <div className="sidebar__main__container">
      <div className="sidebar__nav__container">
        <Navbar style={{ width: "90%", margin: "0 auto" }}>
        <div className="navbar__logo">
          <FontAwesomeIcon icon={faUtensils} />
          <span>Resto.</span>
        </div>
          <NavbarText
            className="mr-auto"
            style={{ fontSize: "20px", textTransform: "capitalize" }}
          >
            Naisan novel
          </NavbarText>
        </Navbar>
      </div>
      <div class="sidebar__container">
        <div className="sidebar">
          <div class="sidebar__nav">
            {dashboardSidebar}
            <a href='' className="sidebar__nav__last__child">
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </a>
          </div>
        </div>
        <div className="sidebar__dashboard__routing">
          {/* <AddDish/> */}
          {/* <ManageDish/> */}
          <OrderList/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;