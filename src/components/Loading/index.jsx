import { HashLoader } from "react-spinners"

const Loading = () => {
    const style = { position: "fixed", top: "50%", left: "50%" }
    return (
        <div style={style}>
            <HashLoader />
        </div>
    )
}

export default Loading