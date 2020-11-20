import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'MENU'
  },


  {
    name: 'Centros Recreativos',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'TABLAS CONCENTRADAS CENTROS RECREATIVOS',
        url: '/base/tables',
        icon: 'menu_book'
      },
      {
        name: 'AÑADIR CENTRO RECREATIVO',
        url: '/base/centro',
        icon: 'icon-home'
      },
      {
        name: 'AÑADIR ARRENDATARIO',
        url: '/base/arrendatario',
        icon: 'icon-user'
      },
      {
        name: 'AÑADIR CONTRATO',
        url: '/base/contrato',
        icon: 'icon-note'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Ingresar',
    url: 'log in verde',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Desconectarse',
    url: 'log out rojo',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
