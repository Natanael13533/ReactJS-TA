import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Comment({comment}) {

    return (
        <div class="list-group w-50 mx-auto">
            <div class="list-group-item list-group-item-action flex-column align-items-start my-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{comment.name}</h5>
                </div>
                <p class="mb-1">{comment.email}</p>
                <small>{comment.body}</small>
            </div>
        </div>
    );
}

export default Comment;