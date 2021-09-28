import React, { lazy, Suspense } from "react";
import { Navbar, NavbarText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlusSquare, faThList, faSignOutAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
import { logOut } from '../../store/user';
import Spinner from '../utilities/Spinner';
import { useDispatch } from "react-redux";

const CartList = lazy(()=> import('./CartList'));
const AddDish = lazy(()=> import('./AddDish'));
const ManageDish = lazy(()=> import('./ManageDish'));


const Dashboard = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();

    const dashboardSidebar = (
      <>
        <Link to={`${url}/order-list`}>
          <FontAwesomeIcon icon={faList} /> Order List
        </Link>
        <Link to={`${url}/add-dish`}>
          <FontAwesomeIcon icon={faPlusSquare} /> Add Dish
        </Link>
        <Link to={`${url}/manage-dish`}>
          <FontAwesomeIcon icon={faThList} /> Manage Dishes
        </Link>
      </>
    );

    const dashboardRouting = (
        <Suspense fallback={<Spinner/>}>
            <Route path={`${path}/order-list`} exact component={CartList} />
            <Route path={`${path}/add-dish`} exact component={AddDish} />
            <Route path={`${path}/manage-dish`} exact component={ManageDish} />
            <Route path={`${path}`} exact component={CartList} />
        </Suspense>
    );

  return (
    <div className="sidebar__main__container">
      <div className="sidebar__nav__container">
        <Navbar style={{ width: "90%", margin: "0 auto" }}>
        <div className="navbar__logo" onClick={()=>history.push('/')}>
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
            <Link to='/' onClick={()=>dispatch(logOut())} className="sidebar__nav__last__child">
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </Link>
          </div>
        </div>
        <div className="sidebar__dashboard__routing"> { dashboardRouting } </div>
      </div>
    </div>
  );
};

export default Dashboard;
