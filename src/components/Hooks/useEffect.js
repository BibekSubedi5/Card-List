import React, { useEffect } from "react";
import "./style.css";

const UseEffect = () =>
{
    // const initialData = 15;
    const [ myNum, setMyNum ] = React.useState( 0 );
    useEffect( () =>
    {
document.title=`Chats(${myNum})`
    } );
    return (
        <>
            <div className="center_div">
                <p>{ myNum }</p>
                <div class="button2" onClick={ () => setMyNum( myNum + 1 ) }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div
                    class="button2"
                    onClick={ () => ( myNum > 0 ? setMyNum( myNum - 1 ) : setMyNum( 0 ) ) }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseEffect;