import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import product4 from './product4.png';
import product5 from './product5.png';
import product6 from './product6.png';
import product7 from './product7.png';
import product8 from './product8.png';
import product9 from './product9.png';
import product10 from './product10.png';
import product11 from './product11.png';



export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];

// const gridEmployeeCountry = (props) => (
//   <div className="flex items-center justify-center gap-2">
//     <GrLocation />
//     <span>{props.Country}</span>
//   </div>
// );
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    {/* <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    /> */}
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  {
    label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1]
  },

  {
    label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2]
  },

  {
    label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3]
  },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'ProductImage',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'ProductName',
    headerText: 'ProductName',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Description',
    headerText: 'Description',
    width: '100',
    textAlign: 'Center'
  },
  {
    field: 'TotalAmount',
    headerText: 'Price',
    width: '100',
    textAlign: 'Center'
  },
    {
    field: 'ProductID',
    headerText: 'ProductID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  {
    field: 'Customer',
    headerText: 'Customer',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Email',
    headerText: 'Email',
    width: '170',
    textAlign: 'Center',
  },
  {
    field: 'Country',
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'CustomerID',
    headerText: 'CustomerID',
    width: '125',
    textAlign: 'Center'
  },
];

export const links = [
  {
    title: 'Ecommerce',
    links: [
      {
        name: 'Dashboard',
        icon: <BiSolidDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Products',
        icon: <BsBoxSeam />,
      },
      {
        name: 'Customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'Sample',
        icon: <RiContactsLine />,
      },
    ],
  },
];


export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    title: 'Customers',
    link: '/customers'
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    title: 'Products',
    link: '/products'
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    title: 'Orders',
    link: '/orders'
  },
];


export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme Cabinet available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'ProductName',
    headerText: 'Product Name',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Description',
    headerText: 'Description',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    ProductID: 1,
    TotalAmount: "1,564",
    ProductName: 'Asus RAM',
    Description: 'RAM 8GB DDR4 3200MHz CL22 (or 2933MHz or 2666MHz) Laptop Memory CT8G4SFRA32A',
    ProductImage:
      product1,
  },
  {
    ProductID: 2,
    TotalAmount: '4,745',
    ProductName: 'Grapic Card',
    Description: 'Graphic Card Cooler 3 x 92mm Fan with Led Frame',
    ProductImage:
      product2,
  },
  {
    ProductID: 3,
    TotalAmount: "6,343",
    ProductName: 'Motherboard',
    Description: 'PRO H610M-E DDR4 Motherboard, Micro-ATX - Supports Intel 12th Gen Core Processors',
    ProductImage:
      product3,
  },
  {
    ProductID: 4,
    TotalAmount: "4,999",
    ProductName: 'HardDisk',
    Description: 'Expansion 1TB External HDD - USB 3.0 for Windows and Mac with 3 yr Data Recovery',
    ProductImage:
      product4,
  },
  {
    ProductID: 5,
    TotalAmount: "12,300",
    ProductName: 'Monitor',
    Description: 'Q-Series 24 Inch (60.5Cm) 1920x1080 Pixels FHD IPS Monitor | Height Adjustment, 2X3W Speakers, 75Hz,',
    ProductImage:
      product5,
  },
  {
    ProductID: 6,
    TotalAmount: '6,144',
    ProductName: 'Motherboard',
    Description: 'ROG Strix Z790-F Gaming WiFi LGA 1700 ATX Motherboard with 16 + 1 Power Stages',
    ProductImage:
      product6,
  },

];

export const employeesData = [
  {
    CustomerID: 1,
    Customer: 'Charles',
    Email: 'Charles342@gmail.com',
    Country: 'USA',

  },
  {
    CustomerID: 2,
    Customer: 'Daniel',
    Email: 'daniel32ds@gmail.com',
    Country: 'USA',
  },
  {
    CustomerID: 3,
    Customer: 'Josaph',
    Email: 'josaph@gmail.com',
    Country: 'USA',
  },
  {
    CustomerID: 4,
    Customer: 'Andrew',
    Email: 'andrew2323der@gmail.com',
    Country: 'USA',
  },
  {
    CustomerID: 5,
    Customer: 'OmarDarobe',
    Email: 'OmarDarobe@gmail.com',
    Country: 'USA',
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'William',
    TotalAmount: "1,564",
    ProductName: 'Asus RAM',
    Description: 'RAM 8GB DDR4 3200MHz CL22 (or 2933MHz or 2666MHz) Laptop Memory CT8G4SFRA32A',
    Location: 'IND',
    ProductImage:
      product1,
  },
  {
    OrderID: 13455,
    CustomerName: 'Charles',
    TotalAmount: '4,745',
    ProductName: 'Grapic Card',
    Description: 'Graphic Card Cooler 3 x 92mm Fan with Led Frame',
    Location: 'EUR',
    ProductImage:
      product2,
  },
  {
    OrderID: 14348,
    CustomerName: 'Joseph',
    TotalAmount: "6,343",
    ProductName: 'Motherboard',
    Description: 'PRO H610M-E DDR4 Motherboard, Micro-ATX - Supports Intel 12th Gen Core Processors',
    Location: 'USA',
    ProductImage:
      product3,
  },
  {
    OrderID: 54548,
    CustomerName: 'Daniel',
    TotalAmount: "4,999",
    ProductName: 'HardDisk',
    Description: 'Expansion 1TB External HDD - USB 3.0 for Windows and Mac with 3 yr Data Recovery',
    Location: 'USA',
    ProductImage:
      product4,
  },
  {
    OrderID: 35654,
    CustomerName: 'Andrew',
    TotalAmount: "12,300",
    ProductName: 'Monitor',
    Description: 'Q-Series 24 Inch (60.5Cm) 1920x1080 Pixels FHD IPS Monitor | Height Adjustment, 2X3W Speakers, 75Hz,',
    Location: 'ENG',
    ProductImage:
      product5,
  },
  {
    OrderID: 34543,
    CustomerName: 'Thomas',
    TotalAmount: '6,144',
    ProductName: 'Motherboard',
    Description: 'ROG Strix Z790-F Gaming WiFi LGA 1700 ATX Motherboard with 16 + 1 Power Stages',
    Location: 'IND',
    ProductImage:
      product6,
  },
  {
    OrderID: 45346,
    CustomerName: 'Bala',
    TotalAmount: '12,150',
    ProductName: 'Grapic Card',
    Description: 'Nvidia GeForce ® GTX 1650 D6 pci_e_x16 WINDFORCE OC 4GD Graphics Card with Integrated 4GB GDDR6 Memory (GV-N1656WF2OC-4GD)',
    Location: 'AUS',
    ProductImage:
      product7,
  },
  {
    OrderID: 43643,
    CustomerName: 'George',
    TotalAmount: '5,699',
    ProductName: 'Cabinet',
    Description: 'Hype Mid-Tower Premium Gaming Cabinet - ATX/M-ATX/M-ITX, 3 x 120 mm Front, 1x120 mm Rear Fan',
    Location: 'USA',
    ProductImage:
      product8,
  },
  {
    OrderID: 64345,
    CustomerName: 'Robert',
    TotalAmount: '22,099',
    ProductName: 'Grapic card',
    Description: 'Gaming GEFORCE RTX 3050 ECO 8GB GDDR6',
    Location: 'IND',
    ProductImage:
      product9,
  },
  {
    OrderID: 23445,
    CustomerName: 'Alexander',
    TotalAmount: '3,211',
    ProductName: 'Mouse',
    Description: 'Wired Mouse 100 with 1600 DPI Optical Sensor, USB Plug-and -Play,ambidextrous Design, Built-in Scrolling and 3 Handy Buttons. 3-Years Warranty (6VY96AA)',
    Location: 'AUS',
    ProductImage:
      product10,
  },
  {
    OrderID: 54323,
    CustomerName: 'James',
    TotalAmount: '3,499',
    ProductName: 'Keyboard',
    Description: 'Wired Multimedia Keyboard with 107 Keys, USB 2.0 Interface, for Gaming Pc, Computer, Laptop, Mac',
    Location: 'NZ',
    ProductImage:
      product11,
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 123 },
    { x: 'Feb', y: 326 },
    { x: 'Mar', y: 453 },
    { x: 'Apr', y: 194 },
    { x: 'May', y: 153 },
    { x: 'Jun', y: 344 },
    { x: 'July', y: 564 },
    { x: 'Aug', y: 342 },
    { x: 'Sep', y: 545 },
    { x: 'Oct', y: 154 },
    { x: 'Nov', y: 344 },
    { x: 'Dec', y: 454 },

  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Sold Products',
    type: 'StackingColumn',

  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 600,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};