import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableTabs = ({ data, style, colFields }) => {
    if(!Object.keys(data).length){
        const items = Array.from({ length: 5 }, (v, i) => i);
        return (
            <div style={style}>
                <TabView>
                        <TabPanel header={"loading"} headerTemplate={() => <Skeleton width='5rem' height="1.5rem"/>} >
                            <DataTable value={items} className="p-datatable-striped">
                                {colFields.map((fields) =>
                                    <Column body={<Skeleton />} {...fields}/>
                                )}
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
                                {colFields.map((fields) => <Column  {...fields}/> )}
                            </DataTable>
                        </TabPanel>
                    );
                })};
            </TabView>
        </div>
    );
};

export default TableTabs;