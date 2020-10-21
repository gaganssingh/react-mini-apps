import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createAuth0Client from "@auth0/auth0-spa-js";

import { AuthContext } from "./contexts/authContext";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import "./App.css";

// Lazy-Loaded Components
const Pomodoro = React.lazy(() => import("./projects/Pomodoro/Pomodoro"));
const Markdown = React.lazy(() => import("./projects/Markdown/Markdown"));
const MiniZelda = React.lazy(() => import("./projects/MiniZelda/MiniZelda"));
const Infinitely = React.lazy(() => import("./projects/Infinitely/Infinitely"));
const QuizMe = React.lazy(() => import("./projects/QuizMe/QuizMe"));
const RockPaperScissors = React.lazy(() =>
    import("./projects/RockPaperScissors/RockPaperScissors")
);

const App = () => {
    const auth0 = useContext(AuthContext);
    console.log(auth0);

    // Initialize Auth0 Client on first app load
    // Enables Login/logout functionality
    useEffect(() => {
        try {
            const initAuthClient = async () => {
                const auth0 = await createAuth0Client({
                    domain: process.env.REACT_APP_AUTH0_DOMAIN_URL,
                    client_id: process.env.JOJDW4T6tbwXpuoVBbCZGtOW0kvn3Q7G,
                });

                const isAuthenticated = await auth0.isAuthenticated();
                const user = await auth0.getUser();
                console.log("isAuthenticated", isAuthenticated);
                console.log("user", user);
            };
            initAuthClient();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <React.Suspense fallback={<h2>Loading...</h2>}>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/pomodoro" component={Pomodoro} />
                    <Route path="/markdown" component={Markdown} />
                    <Route path="/minizelda" component={MiniZelda} />
                    <Route path="/infinitely" component={Infinitely} />
                    <Route path="/quiz" component={QuizMe} />

                    <Route
                        path="/rockpaperscissors"
                        component={RockPaperScissors}
                    />
                </React.Suspense>
            </Switch>
        </Router>
    );
};

export default App;
