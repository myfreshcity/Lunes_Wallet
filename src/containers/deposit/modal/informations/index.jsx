import React from "react";
import PropTypes from "prop-types";

// STYLE
import style from "./style.css";
import colors from "../../../../components/bases/colors";

// MATERIAL
import { Grid, Input, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// UTILS
import i18n from "../../../../utils/i18n";

const customStyle = theme => ({
  inputRoot: {
    color: colors.messages.info,
    margin: "0.5rem 0",
    padding: "5px",
    width: "calc(100% - 20px)",
    "&:hover:before": {
      borderBottomColor: colors.purple.dark
    }
  },
  inputCss: {
    color: colors.messages.info,
    fontFamily: "Noto Sans, sans-serif",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textAlign: "left"
  },
  inputCssCenter: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.5px",
    textAlign: "left"
  },
  inputCssUnderline: {
    "&:before, &:after": {
      borderBottomColor: colors.purple.dark
    },
    "&:hover:not($disabled):not($error):not($focused):before": {
      borderBottomColor: `${colors.purple.dark} !important`
    }
  },
  inputCssUnderlineDisabled: {
    "&:before, &:after": {
      display: "none"
    }
  },
  disabled: {},
  error: {},
  focused: {},
  underlineItems: {
    color: "white",
    borderBottomColor: `${colors.green.default} !important`,
    fontSize: "1em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "14em"
    },
    icon: {
      fill: "green"
    }
  },
  menuItemRoot: {
    color: colors.messages.info
  },
  underline: {
    width: "100%",
    "&:hover": {
      backgroundColor: colors.purple.dark
    },
    "&:before": {
      borderColor: colors.purple.dark
    },
    "&:after": {
      borderColor: colors.purple.dark
    }
  },
  icon: {
    fill: "#68f285"
  }
});

class InformationModal extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      personalNumber: "",
      city: "",
      state: "",
      cep: "",
      address: "",
      addressNumber: ""
    };
  }
  checkAllInputs = () => {
    const {
      fullName,
      personalNumber,
      state,
      city,
      cep,
      address,
      addressNumber
    } = this.state;

    return (
      fullName &&
      personalNumber &&
      state &&
      city &&
      cep &&
      address &&
      addressNumber
    );
  };

  handleInput = property => e => {
    this.setState({
      [property]: e.target.value
    });
  };

  validateForm = () => {
    console.warn(this.state);
  };

  listStates = () => {
    const { classes } = this.props;
    const states = ["São Paulo", "Rio de Janeiro"];

    return states.map((item, index) => (
      <MenuItem
        value={item}
        key={index}
        classes={{
          root: classes.menuItemRoot
        }}
      >
        {item}
      </MenuItem>
    ));
  };

  render() {
    const { classes } = this.props;
    const MenuProps = {
      PaperProps: {
        style: {
          color: "#fff",
          maxHeight: 40 * 4.5,
          marginTop: "45px",
          backgroundColor: "#473088",
          width: "10%"
        }
      }
    };

    return (
      <div>
        <Grid container className={style.container}>
          <Grid item xs={12}>
            <p className={style.formGroup}>
              {i18n.t("DEPOSIT_INF_MODAL_TITLE")}
            </p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            className={style.formGroup}
          >
            <Grid item xs={12} sm={5}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_FULLNAME")}
              </div>
              <Input
                classes={{
                  root: classes.inputRoot,
                  underline: classes.inputCssUnderline,
                  input: classes.inputCssCenter
                }}
                placeholder={i18n.t("DEPOSIT_INF_MODAL_FULLNAME")}
                value={this.state.fullName}
                onChange={this.handleInput("fullName")}
              />
            </Grid>
            <Grid item sm={1} />
            <Grid item xs={12} sm={5}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_PERSONAL_NUMBER")}
              </div>
              <Input
                classes={{
                  root: classes.inputRoot,
                  underline: classes.inputCssUnderline,
                  input: classes.inputCssCenter
                }}
                placeholder={i18n.t("DEPOSIT_INF_MODAL_PERSONAL_NUMBER")}
                value={this.state.personalNumber}
                onChange={this.handleInput("personalNumber")}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            className={style.formGroup}
          >
            <Grid item xs={5} sm={5}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_STATE")}
              </div>
              <Select
                classes={{ selectMenu: classes.underlineItems }}
                MenuProps={MenuProps}
                value={this.state.state}
                input={
                  <Input
                    classes={{
                      underline: classes.underline
                    }}
                  />
                }
                inputProps={{
                  classes: {
                    icon: classes.icon
                  }
                }}
                renderValue={value => value}
                onChange={this.handleInput("state")}
              >
                {this.listStates()}
              </Select>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5} sm={5}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_CITY")}
              </div>
              <Select
                classes={{ selectMenu: classes.underlineItems }}
                MenuProps={MenuProps}
                value={this.state.city}
                input={
                  <Input
                    classes={{
                      underline: classes.underline
                    }}
                  />
                }
                inputProps={{
                  classes: {
                    icon: classes.icon
                  }
                }}
                renderValue={value => value}
                onChange={this.handleInput("city")}
              >
                {this.listStates()}
              </Select>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-around"
            className={style.formGroup}
          >
            <Grid item xs={12} sm={5}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_ADDRESS")}
              </div>
              <Input
                classes={{
                  root: classes.inputRoot,
                  underline: classes.inputCssUnderline,
                  input: classes.inputCssCenter
                }}
                placeholder={i18n.t("DEPOSIT_INF_MODAL_ADDRESS")}
                value={this.state.address}
                onChange={this.handleInput("address")}
              />
            </Grid>
            <Grid item sm={1} />
            <Grid item xs={6} sm={2}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_CEP")}
              </div>
              <Input
                classes={{
                  root: classes.inputRoot,
                  underline: classes.inputCssUnderline,
                  input: classes.inputCssCenter
                }}
                placeholder={i18n.t("DEPOSIT_INF_MODAL_CEP")}
                value={this.state.cep}
                onChange={this.handleInput("cep")}
              />
            </Grid>
            <Grid item sm={1} />
            <Grid item xs={6} sm={2}>
              <div className={style.textGreen}>
                {i18n.t("DEPOSIT_INF_MODAL_ADDRESS_NUMBER")}
              </div>

              <Input
                classes={{
                  root: classes.inputRoot,
                  underline: classes.inputCssUnderline,
                  input: classes.inputCssCenter
                }}
                placeholder={i18n.t("DEPOSIT_INF_MODAL_ADDRESS_NUMBER")}
                value={this.state.addressNumber}
                onChange={this.handleInput("addressNumber")}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={5}>
              <button
                className={
                  this.checkAllInputs()
                    ? style.buttonEnable
                    : style.buttonBorderGreen
                }
                onClick={this.checkAllInputs() ? this.validateForm : null}
              >
                {i18n.t("DEPOSIT_INF_MODAL_BTN_CONTINUE")}
              </button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

InformationModal.propTypes = {
  classes: PropTypes.object
};

export default withStyles(customStyle)(InformationModal);