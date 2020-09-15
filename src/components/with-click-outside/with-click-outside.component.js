import React, { useEffect } from "react";

const withClickOutside = Component => {
    const WrappedComponent = (props) => {

        const handleClickOutside = () => {
            if (props.show) {
                props.clickOutside(false);
            }
        }

        useEffect(() => {
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        });
    
        return (
            <Component {...props} />
        )
    }
  return WrappedComponent;
};

export default withClickOutside;