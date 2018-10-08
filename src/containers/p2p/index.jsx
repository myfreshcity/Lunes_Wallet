import React from "react";
import PropTypes from "prop-types";

//MATERIAL
import { Hidden } from "@material-ui/core/";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons/";

//COMPONENTS
import Tabs from "../../components/tabs";
import Offers from "./offers";
import TabIcons from "./components/tabicons";

//STYLE
import style from "./style.css";
import CreateOffer from "./createOffer";

class P2P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIcon: 0,
      openP2P: true
    };
  }

  handleTabIcon = key => {
    this.setState({
      ...this.state,
      tabIcon: key
    });
  };

  handleP2P = () => {
    const { openP2P } = this.state;
    this.setState({
      ...this.state,
      openP2P: !openP2P
    });
  };

  renderArrow = () => {
    const { openP2P } = this.state;

    if (openP2P) {
      return (
        <KeyboardArrowDown
          className={style.arrowHeader}
          onClick={this.handleP2P}
        />
      );
    } else {
      return (
        <KeyboardArrowUp
          className={style.arrowHeader}
          onClick={this.handleP2P}
        />
      );
    }
  };

  renderContent = () => {
    const { tabIcon } = this.state;
    
    const contents = [
      <Offers key={1} />,
      <Offers key={2} />,
      <div key={3}>Perfil Usuario</div>,
      <CreateOffer  key={4} />
    ];

    return (contents[tabIcon] );
  
  };

  render() {
    const { openP2P } = this.state;
    const contentTabIcons = ["tag", "user", "user_star", "newoffer"];
    const showBox = openP2P ? style.baseWidget : style.baseWidgetClose;

    return (
      <div className={showBox}>
        <Hidden smDown>
          <div className={style.headerP2P}>{this.renderArrow()}</div>
        </Hidden>
        <div className={style.baseContent}>
        {this.renderContent()}
        </div>
        <TabIcons content={contentTabIcons} handle={this.handleTabIcon} />
      </div>
    );
  }
}

P2P.propTypes = {};

export default P2P;
