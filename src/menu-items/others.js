// assets
import { IconBrandFramer, IconHelp, IconUser, IconKey, IconId, IconBellRinging, IconSettings, IconFileInvoice, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

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
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const others = {
    id: 'others',
    title: 'Others',
    type: 'group',
    children: [
        {
            id: 'settings',
            title: 'Settings',
            type: 'collapse',
            icon: icons['IconSettings'],
            children: [
                {
                    id: 'profile',
                    title: 'Profile',
                    type: 'item',
                    url: '',
                    icon: icons['IconUser'],
                    breadcrumbs: false
                },
                {
                    id: 'broker-exchanges',
                    title: 'Broker & Exchanges',
                    type: 'item',
                    url: '/utils/brokers-and-exchanges',
                    icon: icons['IconLayoutGridAdd'],
                    breadcrumbs: false
                },
                {
                    id: 'subscriptions',
                    title: 'Subscriptions',
                    type: 'item',
                    url: '',
                    icon: icons['IconId'],
                    breadcrumbs: false
                },
                {
                    id: 'change-password',
                    title: 'Change Password',
                    type: 'item',
                    url: '',
                    icon: icons['IconKey'],
                    breadcrumbs: false
                }
            ]
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
