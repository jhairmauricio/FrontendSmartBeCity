import React from "react";
import { useLocation, Route, Switch} from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Home = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
        layout = "/home"
      />

      
      <div className="main-content" ref={mainContent}>
      <h1> parte dinamica del contenido </h1>
        <Switch>
          {getRoutes(routes)}
        </Switch>
      </div>
    </>
  );
};

export default Home;
