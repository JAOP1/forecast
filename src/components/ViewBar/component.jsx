import { Toolbar } from 'primereact/toolbar';


export default function AppBar({ rightComponent = [], centerComponent = [] }) {
    const logo = <i className="pi pi-car"> Forecast - Reservamos</i>;

    return (
        <div className="card">
            <Toolbar start={logo} center={centerComponent} end={rightComponent} style={{ borderRadius: '2rem'}}/>
        </div>
    )
}