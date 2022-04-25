import './Grud.css';
import Add from '../../Assets/add.svg';
import {useState} from "react"


function Grud(){

    const [data, setData] = useState([]);

    const fetchProjectData = () => {
        fetch('http://localhost:3005/api/project')
            .then(response => response.json())
            .then(json => setData(json))
    }

    const fetchDepartmentData = () => {
        fetch('http://localhost:3005/api/department')
            .then(response => response.json())
            .then(json => setData(json))
    }

    const fetchEmployeeData = () => {
        fetch('http://localhost:3005/api/employee')
            .then(response => response.json())
            .then(json => setData(json))
    }

    return (
        <div className='main'>
            <div className="grud-main">
            <div className="blog">
                <div className="title">
                    <div>Работа с таблицой:</div>
                    <div className="table" onClick={fetchProjectData}>Project</div>
                    <div className="table" onClick={fetchEmployeeData}>Employee</div>
                    <div className="table" onClick={fetchDepartmentData}>Department</div>
                </div>
            </div>
            <div className="blog">
            <div className="title-data">
                    {data ? data.map(item => {
                        return <div className="data" key={item.id}>
                            {Object.keys(item).map(key => <div key={key}>{key}</div>)}
                        </div>
                    }) : null}
                </div>
            </div>
            { data ? 
            data.map(elem => {
                return <div className="blog-posts">
                            <div className='data'>
                                {Object.values(elem).map(key => {return <div style={{
                                    marginLeft: '10px',
                                }}
                                >{key}</div>})}
                            </div>
                        </div>
            }) : null }
            <div className="blog">
                <div className="start">
                    <div className="dot">
                        <img src={Add}></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Grud;
