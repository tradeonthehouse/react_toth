// assets
import { IconBrandFramer, IconFileUpload, Icon3dCubeSphere, IconHelp, IconUser, IconKey, IconId, IconBellRinging, IconSettings, IconFileInvoice, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

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
    Icon3dCubeSphere: Icon3dCubeSphere
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const others = {
    id: 'others',
    // title: 'Others',
    type: 'group',
    children: [
        {
            id: 'trading-algo-page',
            title: 'Trading Algo',
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
            id: 'invoices',
            title: 'Invoices',
            type: 'item',
            url: '',
            icon: icons['IconFileInvoice'],
            breadcrumbs: false
        },
        {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '',
            icon: icons['IconBellRinging'],
            breadcrumbs: false
        },
        {
            id: 'help-support',
            title: 'Help & Support',
            type: 'item',
            url: '',
            icon: icons['IconHelp'],
            breadcrumbs: false
        },
    ]
};
