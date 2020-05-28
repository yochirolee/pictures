import React from "react";

export default function Error(props) {
    const {error} =props;
  return (
    <div class="alert alert-block alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <h4 class="alert-heading">Opss!</h4>
      <p class="mb-0">
      
       {error.message}
        
      </p>
    </div>
  );
}
