import React from "react";
import { useRouteMatch } from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocationCity from "@material-ui/icons/LocationCity";

import { Language } from "./Language";
import { SearchInput } from "./SearchInput";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
}));

interface HeaderProps {
    onLanguageChange: (lang: string) => void;
    onSearchTermChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const match = useRouteMatch('/country/:id');

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <LocationCity />

                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.title}
                        noWrap
                    >
                        Travel App (Team 98)
                    </Typography>

                    <Language
                        onChange={(lang) => props.onLanguageChange(lang)}
                    />

                    { !match && <SearchInput onSearchTermChange={props.onSearchTermChange}/> }
                </Toolbar>
            </AppBar>
        </div>
    );
};
