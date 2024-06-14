import { useState, useEffect } from 'react'
import CounterComponent from "../CounterComponent/CounterComponent";





const Options = () => {
    const [state, setState] = useState(() => {
        const savedObject = window.localStorage.getItem("saved-clicks");

        if (savedObject !== null) {
            return JSON.parse(savedObject);
        }

        return 0;
    });

    useEffect(() => {
        window.localStorage.setItem("saved-clicks", JSON.stringify({ ...state }));
    }, [state]);

    const handleIncrementA = () => {
        setState({ ...state, good: state.good + 1 });
    };

    const handleIncrementB = () => {
        setState({ ...state, neutral: state.neutral + 1 });
    };

    const handleIncrementC = () => {
        setState({ ...state, bad: state.bad + 1 });
    };

    const handleIncrementD = () => {
        setState({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    // const [isOpen, setIsOpen] = useState(false);
    // const handleToggle = () => {
    //   setIsOpen(!isOpen);
    // };

    // const updateFeedback = (feedbackType) => {
    //  setState({ ...state, feedbackType: state.feedbackType + 1 });
    // };

    const totalFeedback = state.good + state.neutral + state.bad;
    // const classNames = clsx(!totalFeedback ? css.onLine : css.ofLine);


    return (
        <div>
            <CounterComponent value={"Good"} handleIncrement={handleIncrementA} />
            <CounterComponent value={"Neutral"} handleIncrement={handleIncrementB} />
            <CounterComponent value={"Bad"} handleIncrement={handleIncrementC} />
            {/* <CounterComponent value={"Reset"} handleIncrement={handleIncrementD} /> */}
            {totalFeedback ?
                <CounterComponent value={"Reset"} handleIncrement={handleIncrementD} />
                : ""}
        </div>
    );
}
export default Options
