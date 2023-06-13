// assets
import { IconBrandFramer, IconFileUpload, IconStars, Icon3dCubeSphere, IconHelp, IconUser, IconKey, IconId, IconBellRinging, IconSettings, IconFileInvoice, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
    IconLayoutGridAdd: IconLayoutGridAdd,
    IconSettings: IconSettings,
    IconFileInvoice: IconFileInvoice,
    IconBellRinging: IconBellRinging,
    IconHelp: IconHelp,
    IconUser: IconUser,
    IconId: IconId,
    IconKey: IconKey,
    IconFileUpload: IconFileUpload,
    Icon3dCubeSphere: Icon3dCubeSphere,
    IconStars: IconStars
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const others = {
    id: 'others',
    // title: 'Others',
    type: 'group',
    children: [
        {
            id: 'trading-algo-page',
            title: 'Strategies',
            type: 'item',
            url: '/utils/trading-algo',
            icon: icons['Icon3dCubeSphere'],
            breadcrumbs: false
        },
        {
            id: 'file-upload',
            title: 'Create Strategy',
            type: 'item',
            url: '/utils/create-strategy',
            icon: icons['IconFileUpload'],
            breadcrumbs: false
        },
        {
            id: 'place-holder1',
            title: 'Place Holder1',
            type: 'item',
            url: '/utils/place-holder1',
            icon: icons['IconStars'],
            breadcrumbs: false
        },
        {
            id: 'place-holder2',
            title: 'Market Alerts',
            type: 'item',
            url: '/utils/place-holder2',
            icon: icons['IconStars'],
            breadcrumbs: false
        },
        {
            id: 'place-holder3',
            title: 'Place Holder3',
            type: 'item',
            url: '/utils/place-holder3',
            icon: icons['IconStars'],
            breadcrumbs: false
        },
        {
            id: 'invoices',
            title: 'Invoices',
            type: 'item',
            url: '/utils/invoices',
            icon: icons['IconFileInvoice'],
            breadcrumbs: false
        },
        {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/utils/notifications',
            icon: icons['IconBellRinging'],
            breadcrumbs: false
        },
        {
            id: 'help-support',
            title: 'Help & Support',
            type: 'item',
            url: '/utils/help-support',
            icon: icons['IconHelp'],
            breadcrumbs: false
        },
    ]
};
