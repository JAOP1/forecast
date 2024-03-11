import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableTabs = ({ data, style }) => {
    if(!Object.keys(data).length){
        const items = Array.from({ length: 5 }, (v, i) => i);
        return (
            <div style={style}>
                <TabView>
                        <TabPanel header={"loading"} headerTemplate={() => <Skeleton width='5rem' height="1.5rem"/>} >
                            <DataTable value={items} className="p-datatable-striped">
                                <Column field="hour" header="Hour"  body={<Skeleton />}/>
                                <Column field="temp_min" header="Min. Temperature"  body={<Skeleton />}/>
                                <Column field="temp_max" header="Max. Temperature"  body={<Skeleton />}/>
                            </DataTable>
                        </TabPanel>
                </TabView>
            </div>
        );
    }

    return (
        <div style={style}>
            <TabView>
                {Object.keys(data).map((label,ind) => {
                    return(
                        <TabPanel header={label} key={ind}>
                            <DataTable value={data[label]}>
                                <Column field="hour" header="Hour"/>
                                <Column field="temp_min" header="Min. Temperature"/>
                                <Column field="temp_max" header="Max. Temperature"/>
                            </DataTable>
                        </TabPanel>
                    );
                })};
            </TabView>
        </div>
    );
};

export default TableTabs;