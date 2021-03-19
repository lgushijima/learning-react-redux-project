import React from "react";

export default function Page404 (){
    return (
        <div className="container my-4">
            <div className="text-center">
                <div className="page-404-title">
                    <h2 className="">Oops!</h2>
                    <p>Error 404</p>
                    <p>Sorry, the page you requested could not be found.</p>
                </div>
                
                <div className="page-404-body">
                    <i className="fas fa-book-dead"></i>
                </div>
            </div>
        </div>
    );
}
