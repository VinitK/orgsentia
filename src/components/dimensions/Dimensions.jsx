import React, { useState } from 'react';
import Datatable from '../datatable/Datatable';
import { Card, Button, Spinner } from 'react-bootstrap';

const Dimensions = ({ data }) => {

    const dimensions = ["Location", "Designation", "Department"];
    const [selected, setSelected] = useState(0);

    const handleSelected = (i) => {
        setSelected(i);
    }

    return (
        <div className="Dimensions">
            <Card.Header as="h5" className="frow faic fwrap">
                <p className="mr-3">Organization Sentiment Analysis by</p>
                <div className="dims frow fwrap">
                    {
                        dimensions.map((dim, i) => (
                            <Button key={i} onClick={() => handleSelected(i)} className="mr-3 mt-1" variant={i === selected ? "primary" : "outline-primary"}>{dim}</Button>
                        ))
                    }
                </div>
            </Card.Header>
            <Card.Body>
                {
                    data.loading
                        ?
                        <div className="fcol w100pc tac">
                            <Spinner animation="border" variant="primary" />
                            <h6 className='mt-3'>Fetching data...</h6>
                        </div>
                        :
                        <Datatable userdata={selected === 0 ? data.usersByLocation : selected === 1 ? data.usersByDesignation : data.usersByDepartment} votedata={data.votesByUsers} />
                }
            </Card.Body>
        </div>
    );
};

export default Dimensions;