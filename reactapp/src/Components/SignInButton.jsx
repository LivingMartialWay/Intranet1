import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package 
 */

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup({scopes: ["User.Read"]}).catch((e) => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect({scopes: ["User.Read"]}).catch((e) => {
                console.log(e);
            });
        }
    };
    return (
        <DropdownButton
            variant="secondary"
            className="ml-auto"
            drop="start"
            title="Sign In"
            onClick={() => handleLogin("popup")}
        >
        </DropdownButton>
    );
};