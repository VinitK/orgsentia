import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Datatable = ({ userdata, votedata }) => {
    const [state, setState] = useState({
        userdata: [],
        votedata: [],
        totalSentiment: 0
    })

    useEffect(() => {
        let totalSentiment = 0;
        const modifiedUserData = Object.entries(userdata).map(([key, value]) => {
            totalSentiment = totalSentiment + value.sentimentScore;
            return { seg: key, ...value }
        });
        const modifiedVoteData = Object.values(votedata)
        setState(ps => ({ ...ps, userdata: modifiedUserData, votedata: modifiedVoteData, totalSentiment }));
    }, [userdata, votedata]);

    return (
        <div className="Datatable">
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Segment</th>
                        <th className='tac'>Sentiment Score</th>
                        <th className='tac'>Participation Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.userdata.map(user => (
                            <tr key={user.seg}>
                                <td>{user.seg}</td>
                                <td className="tac">{user.sentimentScore}</td>
                                <td className="tac">{(user.numOfUsers / state.votedata.length) * 100}</td>
                            </tr>
                        ))
                    }
                    <tr className="b">
                        <td>Overall Sentiment</td>
                        <td className="tac">{state.totalSentiment}</td>
                        <td className="tac">100</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Datatable;