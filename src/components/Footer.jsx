import Row from "react-bootstrap/Row";
import {FcPortraitMode} from "react-icons/fc"
const Footer=()=>{
    return (
        <Row className="bg-dark p-3 align-items-center rounded-4 ">
            <p className="text-info m-auto">Copyright by Hakan <FcPortraitMode/>  {new Date().getFullYear()}</p>
        </Row>
    )
}

export default Footer