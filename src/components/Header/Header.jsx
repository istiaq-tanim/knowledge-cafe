import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-green-600 normal-case text-3xl text-bold">Dev Cafe</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?w=996&t=st=1680325668~exp=1680326268~hmac=4de26b680d6843a8b205f64d72f19e969f3fc44931e0f6c8567e9eac5dc2c6f5"/>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;