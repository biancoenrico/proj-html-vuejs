var app = new Vue({
    el: '#root',
    data: {
      navList:
      [
        {
            name:'Home',
            list:[]
        },
        {
            name:'Courses',
            list:[]
        },
        {
            name:'About Us',
            list:[]
        },
        {
            name:'News',
            list:[]
        },
        {
            name:'Pages',
            list:[]
        },
        {
            name:'Contact',
            list:[]
        },
        {
            name:'Purchase',
            list:[]
        },
      ],
      footerList: [
        {
            name:'Get EduPrime',
            list:[
                'Request a Website',
                'Browse Themes',
                'Payment Options',
                'Support System',
                'Checkout',
                'Purchase Theme',
            ]
        },
        {
            name:'networking',
            list:[
                'Purchase Theme',
                'Our Benefits',
                'Ous Team',
                'Our Services',
                'Other Products',
                'My Account',
            ]
        },
      ],
      categories:[
        'ECONOMY',
        'DESIGN',
        'COACHING',
        'BUSINESS',
        'MEDICINE',
        'LAW',
        'FITNESS',
      ],
      partners:[
          '2',
          '3',
          '4',
          '5',
          '6',
          '8',
          '1',
          '7',
      ],
      facultyInfo:
      [
        {
            icon:'img/Gavel-v2.png',
            img:'img/Gavel-illustration-e1556884768193.png',
            name: 'law faculty',
            desc: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
            icon:'img/Coins-tabs-v2.png',
            img:'img/Economy.png',
            name: 'economy faculty',
            desc: 'An economy encompasses all activity related to production, consumption, and trade of goods and services in an area. ... The economy of a particular region or country is governed by its culture, laws, history, and geography, among other factors, and it evolves due to the choices and actions of the participants.',
        },
        {
            icon:'img/Medicine-tabs-v2.png',
            img:'img/Medicine.png',
            name: 'medicine faculty',
            desc: 'Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health.',
        },
        {
            icon:'img/Computer-tabs-v2.png',
            img:'img/Computer-Science.png',
            name: 'Informatic faculty',
            desc: 'Informatics is the science of how to use data, information and knowledge to improve human health and the delivery of health care services. Health IT is part of informatics and an essential aspect of AMIA, but technology and technological considerations are only one component of the association\'s work.',
        },
        {
            icon:'img/Palette-tabs-v2.png',
            img:'img/Graphic-design.png',
            name: 'graphics faculty',
            desc: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users\' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.',
        }
      ],
      selectedInfo: 0,
    },
    methods: {

    },
  
})