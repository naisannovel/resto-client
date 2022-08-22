import React, { lazy, Suspense } from "react";
import { Navbar, NavbarText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlusSquare, faThList, faSignOutAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
import { logOut } from '../../store/user';
import Spinner from '../utilities/Spinner';
import { useDispatch, useSelector } from "react-redux";

const CartList = lazy(()=> import('./CartList'));
const AddDish = lazy(()=> import('./AddDish'));
const ManageDish = lazy(()=> import('./ManageDish'));


const Dashboard = () => {

  const userInfo = useSelector(state =>{
    return {
      name: state?.user?.user?.name
    }});

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
