import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! This page can not be found <Link to="/"> Go home</Link>
    </div>
);

export default NotFoundPage;