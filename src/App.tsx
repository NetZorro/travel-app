import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Lang } from "./entities/interfaces";
import LocaleContext from "./LocaleContext";
import MainPage from "./pages/MainPage";
import CountryPage from "./pages/СountryPage";

const App: React.FC = () => {
    const [language, setLanguage] = useState<Lang>("be");

    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const onLanguageChange = (lang: string) => {
        changeLanguage(lang);
        setLanguage(lang as Lang);
    };

    return (
        <LocaleContext.Provider value={language}>
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <Header onLanguageChange={onLanguageChange} />

                    <main>
                        <Switch>
                            <Route
                                component={CountryPage}
                                path="/country/:id"
                            />
                            <Route component={MainPage} exact path="/" />
                        </Switch>
                    </main>
                    <Footer />
                </React.Fragment>
            </Router>
        </LocaleContext.Provider>
    );
};

export default App;
