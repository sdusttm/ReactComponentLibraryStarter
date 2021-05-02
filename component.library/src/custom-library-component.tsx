import React, { useState } from "react";

interface CustomLibraryComponentProps {
    message: string;
}

export const CustomLibraryComponent = ({ message }: CustomLibraryComponentProps) => {
    const [hide, setHide] = useState(false);

    return (
        <>
            {!hide && <div>{message}</div>}
            <button onClick={() => setHide(!hide)}>Hide</button>
        </>
    );
};
