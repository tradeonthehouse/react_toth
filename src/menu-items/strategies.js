// assets
import { IconBrandFramer, IconViewfinder, Icon3dCubeSphere, IconFileUpload, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
    IconLayoutGridAdd: IconLayoutGridAdd,
    IconViewfinder: IconViewfinder,
    IconFileUpload: IconFileUpload,
    Icon3dCubeSphere: Icon3dCubeSphere
    
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const strategies = {
    id: 'strategies',
    title: 'Strategies',
    type: 'group',
    children: [
        {
            id: 'Strategy',
            title: 'Strategies',
            type: 'collapse',
            icon: icons['IconViewfinder'],
            children: [
                {
                    id: 'file-upload',
                    title: 'File Upload',
                    type: 'item',
                    url: '/utils/upload-file',
                    icon: icons['IconFileUpload'],
                    breadcrumbs: false
                },
                {
                    id: 'trading-algo',
                    title: 'Trading Algo',
                    type: 'item',
                    url: '/utils/trading-algo',
                    icon: icons['Icon3dCubeSphere'],
                    breadcrumbs: false
                }
            ]
        }
    ]
};
