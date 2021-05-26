import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecents } from '../../actions/recents';

import Recent from './Recent/Recent';

const Recents = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecents());
    }, [dispatch]);

    const recents = useSelector((state) => state.recents);
    return(
        !recents.length ? (<div className="spinner-border" role="status"></div>) : 
        (<div className="row" id="recents">
            {recents.map((recent) => (
                <div key={recent._id} className="col-md-4">
                    <Recent recent={recent} />
                </div>
            ))}
        </div>)
    );
};

export default Recents;