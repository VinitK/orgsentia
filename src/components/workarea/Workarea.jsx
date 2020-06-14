import React, { useState, useEffect } from 'react';
import Dimensions from '../dimensions/Dimensions';
import { Card } from 'react-bootstrap';
import { getData } from '../../utils/db';

const Workarea = () => {

    const [state, setState] = useState({
        usersByLocation: {},
        usersByDesignation: {},
        usersByDepartment: {},
        votesByUsers: {},
        votesByQuestions: {},
        loading: true
    });

    useEffect(() => {
        (async function anyNameFunction() {
            const response = await getData("https://us-central1-orgsentia.cloudfunctions.net/webApi/api/v1/data/UGVjZqUWThUAcjiK7cKL");
            setState(ps => ({
                ...ps,
                ...response.data,
                loading: false
            }));
        })();
    }, []);

    return (
        <div className="Workarea container mt-2">
            <Card>
                <Dimensions data={state} />
            </Card>
        </div>
    );
};

export default Workarea;