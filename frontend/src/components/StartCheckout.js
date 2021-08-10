import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";
import { makeStyles } from "@material-ui/styles";
import universal_styles from "./UniversalStyles";
import { useMediaQuery } from "react-responsive";
import { Input } from "antd";
import { Button, Card, Alert } from "antd";
import {
  LinkOutlined,
  ThunderboltOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import amplitude from "amplitude-js";
import MailIcon from "@material-ui/icons/Mail";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Tooltip } from "antd";
import HelpOutline from "@material-ui/icons/HelpOutline";
import { withRouter, useHistory } from "react-router-dom";
import { Rate } from 'antd';

import {Converter} from 'showdown';

import StarIcon from '@material-ui/icons/Star';
import * as Sentry from "@sentry/react";

const { Title, Text, Link } = Typography;
const { TextArea } = Input;

var USING_URL = process.env.REACT_APP_BACKEND_URL;

/*
    View that represents a checkout process. This is a pretty simple form, but
    oh well.

*/


function StartCheckout(props) {


    return (
        <div>


        </div>
    )
}

export default StartCheckout;