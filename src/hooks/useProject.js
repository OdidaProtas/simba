import React from 'react';

const useProject = () => {
    const [feedback, setFeedback] = React.useState({
        open: false
    });

    const toggleFeedback = () => {
        setFeedback({...feedback, open: !feedback.open})
    }

    const handleFeedback = (e) => {
        e.preventDefault();
    }

    return {
        open: feedback.open,
        toggle: toggleFeedback,
        handleFeedback: handleFeedback
    };
}

export default useProject;
