/************************** Import library/fungsi ****************************/
import React from 'react';

// komponen yang dimuat di page

// modul-modul SemanticUI
import { Accordion } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

/************************ Deklarasi objek/variabel ***************************/
const level1Panels = [
  { key: 'panel-1a', title: 'Group Tag 1A', content: '<List Group Tag>' },
  { key: 'panel-1b', title: 'Group Tag 1B', content: '<List Group Tag>' },
  { key: 'panel-1c', title: 'Group Tag 1C', content: '<List Group Tag>' },
  { key: 'panel-1d', title: 'Group Tag 1D', content: '<List Group Tag>' },
];

const Level1Content = (
  <div>
    {/*Welcome to level 1*/}
    <Accordion.Accordion panels={level1Panels} exclusive={false}/>
  </div>
);

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: '<List Group Tag>' },
  { key: 'panel-2b', title: 'Level 2B', content: '<List Group Tag>' },
  { key: 'panel-2c', title: 'Level 2C', content: '<List Group Tag>' },
  { key: 'panel-2d', title: 'Level 2D', content: '<List Group Tag>' },
];

const Level2Content = (
  <div>
    {/*Welcome to level 2*/}
    <Accordion.Accordion panels={level2Panels} exclusive={false}/>
  </div>
);

const level3Panels = [
  { key: 'panel-3a', title: 'Level 3A', content: '<List Group Tag>' },
  { key: 'panel-3b', title: 'Level 3B', content: '<List Group Tag>' },
  { key: 'panel-3c', title: 'Level 3C', content: '<List Group Tag>' },
  { key: 'panel-3d', title: 'Level 3D', content: '<List Group Tag>' },
];

const Level3Content = (
  <div>
    {/*Welcome to level 3*/}
    <Accordion.Accordion panels={level3Panels} exclusive={false}/>
  </div>
);

const level4Panels = [
  { key: 'panel-4a', title: 'Level 4A', content: '<List Group Tag>' },
  { key: 'panel-4b', title: 'Level 4B', content: '<List Group Tag>' },
  { key: 'panel-4c', title: 'Level 4C', content: '<List Group Tag>' },
  { key: 'panel-4d', title: 'Level 4D', content: '<List Group Tag>' },
];

const Level4Content = (
  <div>
    {/*Welcome to level 4*/}
    <Accordion.Accordion panels={level4Panels} exclusive={false}/>
  </div>
);

const rootPanels = [
  { key: 'panel-1', title: 'Device 1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Device 2', content: { content: Level2Content } },
  { key: 'panel-3', title: 'Device 3', content: { content: Level3Content } },
  { key: 'panel-4', title: 'Device 4', content: { content: Level4Content } },
];

/************************ Deklarasi kelas/komponen ***************************/
const AdminHome = () => (
  <div>
    <h1 className="centeredH1">Device List</h1>
    <Grid columns={2}>
      <Grid.Row>
        {/* Untuk membuat Accordion mampu membuka lebih dari 1 item sekaligus,
            buat exclusive={false} (defaultnya ={true}).
            Jika exclusive={false}, defaultActiveIndex harus array. 
            Untuk membuat gaada yg terbuka pada kondisi default, kosongkan arraynya. */}
        <Accordion fluid styled defaultActiveIndex={[]} panels={rootPanels} exclusive ={false}/>
      </Grid.Row> 
    </Grid>
  </div>
);

export default AdminHome;