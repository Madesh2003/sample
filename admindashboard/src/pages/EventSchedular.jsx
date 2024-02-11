import React, { useEffect, useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Header } from '../components';
import axios from 'axios';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState(null); // Initialize with null
  const [scheduleData, setScheduleData ] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios.get("http://localhost:8000/event")
    .then((res) => {
      setScheduleData(res.data); // Set res.data instead of just res
    })
    .catch((err) => console.log(err));
  }, []); // Empty dependency array for running only once

  console.log(scheduleData)
  const change = (args) => {
    if(scheduleObj) {
      scheduleObj.selectedDate = args.value;
      scheduleObj.dataBind();
    }
  };

  const onDragStart = (arg) => {
    if(arg.navigation) {
      arg.navigation.enable = true;
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Calendar" />
    <ScheduleComponent
      height="650px"
      ref={(schedule) => setScheduleObj(schedule)}
      selectedDate={new Date(2021, 0, 10)}
      eventSettings={{ dataSource: scheduleData }}
      dragStart={onDragStart}
    >
      <ViewsDirective>
        { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
    </ScheduleComponent>
    <PropertyPane>
      <table
        style={{ width: '100%', background: 'white' }}
      >
        <tbody>
          <tr style={{ height: '50px' }}>
            <td style={{ width: '100%' }}>
              <DatePickerComponent
                value={new Date(2021, 0, 10)}
                showClearButton={false}
                placeholder="Current Date"
                floatLabelType="Always"
                change={change}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </PropertyPane>
  </div>
  );
};

export default Scheduler;
