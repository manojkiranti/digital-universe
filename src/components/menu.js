export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'th',
        // badge: {
        //     variant: "success",
        //     text: "menuitems.dashboard.badge"
        // },
        link: '/dashboard'
    },
    {
        id: 3,
        label: 'menuitems.ttrtgs.text',
        icon: 'money-check-edit',
        subItems: [
            {
                id: 34,
                label: 'menuitems.ttrtgs.list.apply',
                link: '/tt-rtgs/apply',
            },
            {
                id: 33,
                label: 'menuitems.ttrtgs.list.list',
                link: '/tt-rtgs',
            },
           
        ]
    
    },
    {
        id: 4,
        label: 'menuitems.bg.text',
        icon: 'envelope-open',
        subItems: [
            
            {
                id: 34,
                label: 'menuitems.bg.list.apply',
                link: '/bank-gurantee/apply',
            },
            {
                id: 33,
                label: 'menuitems.bg.list.list',
                link: '/bank-gurantee',
            },
        ]
    },
    {
        id: 5,
        label: 'menuitems.document.text',
        icon: 'file-image',
        link: '/documents'
    },
    {
        id: 6,
        label: 'menuitems.profile.text',
        icon: 'user-tie',
        link: '/profile'
    }
]

export const menuItemsAdmin = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        badge: {
            variant: "success",
            text: "menuitems.dashboard.badge"
        },
        link: '/admin/dashboard'
    },
    {
        id: 3,
        label: 'menuitems.admin.product.text',
        icon: 'ri-brush-3-line',
        link: '/admin/products'
    },
    {
        id: 4,
        label: 'menuitems.admin.user.text',
        icon: 'ri-brush-3-line',
        link: '/admin/user'
    },
]