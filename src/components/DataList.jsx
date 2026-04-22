import "./DataList.css"

const DataList = () => {
    return (
        <div className="dataList-container">
            <img src={"/contendOs.png"} alt="contendOs logo" className="contendOs-logo" />
            <div className="profile-contend">
                <h3>Profile</h3> <img src={"/L_avatar.jpg"} alt="profile-photo"/>
            </div>
        </div>
    );
}

export default DataList;
