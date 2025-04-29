import "./Debug.css";

function Debug() {
    let winszw = window.innerWidth;
    let winszh = window.innerHeight;
    return (
        <>
            <div className="debugger">
                {winszw}x{winszh}
            </div>
        </>
    );
}

export default Debug;
