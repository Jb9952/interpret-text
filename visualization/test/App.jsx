import React from 'react';
import {ExplanationDashboard}  from '../dashboard/rel/MLIDashboard/ExplanationDashboard';

import {newsgroupBinaryData} from './_mock_data/newsgroupBinaryData';


    class App extends React.Component {
      constructor(props) {
        super(props)
      }

      render() {
        let data = newsgroupBinaryData;
        return (
          <div style={{backgroundColor: 'rgb(220,220,220)', height:'100%'}}>
              <div style={{ width: '80vw', backgroundColor: 'rgb(220,220,220)', margin:'50px auto'}}>
                  <div style={{ width: '100%'}}>
                      <ExplanationDashboard
                        modelInformation = {{model: 'msra'}}
                        dataSummary = {{text: data.text, localExplanations: data.localExplanations, classNames: data.classNames, prediction:data.prediction}}
                        />
                  </div>
              </div>
          </div>
        );
      }
    }
    export default App;