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
    },
    methods: {

    },
  
})