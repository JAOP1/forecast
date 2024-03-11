import PropTypes from 'prop-types';
import { Toolbar } from 'primereact/toolbar';


function AppBar({ rightComponent = [], centerComponent = [] }) {
    const logo = <i className="pi pi-car"> Forecast - Reservamos</i>;

    return (
        <div className="card">
            <Toolbar start={logo} center={centerComponent} end={rightComponent} style={{ borderRadius: '2rem'}}/>
        </div>
    )
}

AppBar.propTypes = {
    rightComponent: PropTypes.element,
    centerComponent: PropTypes.element
};
export default AppBar;